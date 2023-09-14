"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompiledFunction = void 0;
const discord_js_1 = require("discord.js");
const noop_1 = __importDefault(require("../functions/noop"));
const FunctionManager_1 = require("../managers/FunctionManager");
const ForgeError_1 = require("./ForgeError");
const NativeFunction_1 = require("./NativeFunction");
const Return_1 = require("./Return");
const constants_1 = require("../constants");
class CompiledFunction {
    static IdRegex = /^(\d{16,23})$/;
    data;
    fn;
    constructor(raw) {
        this.fn = FunctionManager_1.FunctionManager.get(raw.name);
        this.data = {
            ...raw,
            fields: raw.fields?.map(x => (!("op" in x) ?
                {
                    ...x,
                    functions: x.functions.map(x => new CompiledFunction(x))
                } :
                {
                    ...x,
                    lhs: {
                        ...x.lhs,
                        functions: x.lhs.functions.map(x => new CompiledFunction(x))
                    },
                    rhs: x.rhs ? {
                        ...x.rhs,
                        functions: x.rhs.functions.map(x => new CompiledFunction(x))
                    } : undefined
                })) ?? null
        };
    }
    get display() {
        if (this.data.fields === null)
            return this.data.name;
        else {
            const args = new Array();
            for (let i = 0, len = this.data.fields.length; i < len; i++) {
                const field = this.data.fields[i];
                if ("op" in field) {
                    if (field.rhs) {
                        args.push(`${field.lhs.resolve(field.lhs.functions.map(x => x.display))}${field.op}${field.rhs.resolve(field.rhs.functions.map(x => x.display))}`);
                    }
                    else
                        args.push(field.lhs.resolve(field.lhs.functions.map(x => x.display)));
                    continue;
                }
                args.push(field.resolve(field.functions.map(x => x.display)));
            }
            return `${this.data.name}[${args.join(";")}]`;
        }
    }
    /**
     * Resolves fields of a function.
     * @param ctx
     * @returns
     */
    async resolveArgs(ctx) {
        const args = new Array(this.fn.data.args?.length ?? 0);
        if (!this.fn.data.args?.length || (this.fn.data.brackets === false && !this.hasFields))
            return Return_1.Return.success(args);
        for (let i = 0, len = this.fn.data.args.length; i < len; i++) {
            const arg = this.fn.data.args[i];
            if (!arg.rest) {
                // Assertion because condition fields should never be executed with unwraps.
                const field = this.data.fields?.[i];
                const resolved = await this.resolveCode(ctx, field);
                if (!this.isValidReturnType(resolved))
                    return resolved;
                const val = await this.resolveArg(ctx, arg, field, resolved.value, args);
                if (!this.isValidReturnType(val))
                    return val;
                args[i] = val.value;
            }
            else {
                const fields = this.data.fields?.slice(i);
                const values = new Array();
                if (!fields?.length) {
                    args[i] = values;
                    break;
                }
                for (let x = 0, len = fields.length; x < len; x++) {
                    // Assertion because condition fields should never be executed with unwraps.
                    const field = fields[x];
                    const resolved = await this.resolveCode(ctx, field);
                    if (!this.isValidReturnType(resolved))
                        return resolved;
                    const val = await this.resolveArg(ctx, arg, field, resolved.value, args);
                    if (!this.isValidReturnType(val))
                        return val;
                    values[x] = val.value;
                }
                args[i] = values;
            }
        }
        return Return_1.Return.success(args);
    }
    /**
     * Does not account for condition fields.
     * @param ctx
     * @param index
     * @returns
     */
    async resolveUnhandledArg(ctx, index) {
        const field = this.data.fields[index];
        const arg = this.fn.data.args[index];
        const str = await this.resolveCode(ctx, field);
        if (!this.isValidReturnType(str))
            return str;
        return this.resolveArg(ctx, arg, field, str.value, []);
    }
    async resolveCondition(ctx, field) {
        const lhs = await this.resolveCode(ctx, field.lhs);
        if (!this.isValidReturnType(lhs))
            return lhs;
        if (field.rhs === undefined) {
            return Return_1.Return.success(field.resolve(lhs.value, null));
        }
        const rhs = await this.resolveCode(ctx, field.rhs);
        if (!this.isValidReturnType(rhs))
            return rhs;
        return Return_1.Return.success(field.resolve(lhs.value, rhs.value));
    }
    async resolveCode(ctx, { resolve: resolver, functions } = {}) {
        if (!resolver || !functions)
            return Return_1.Return.success(null);
        const args = new Array(functions.length);
        if (functions.length === 0)
            return Return_1.Return.success(resolver(args));
        for (let i = 0, len = functions.length; i < len; i++) {
            const fn = functions[i];
            const rt = await fn.execute(ctx);
            if (!this.isValidReturnType(rt))
                return rt;
            args[i] = rt.value;
        }
        return Return_1.Return.success(resolver(args));
    }
    argTypeRejection(arg, value) {
        return Return_1.Return.error(this.error(ForgeError_1.ErrorType.InvalidArgType, `${value}`, arg.name, NativeFunction_1.ArgType[arg.type]));
    }
    resolveNumber(ctx, arg, str, ref) {
        const value = Number(str);
        if (isNaN(value))
            return;
        return value;
    }
    resolveString(ctx, arg, str, ref) {
        return str;
    }
    resolveTime(ctx, arg, str, ref) {
        try {
            return !isNaN(Number(str)) ? Number(str) : constants_1.TimeParser.parseToMS(str);
        }
        catch (error) {
            return;
        }
    }
    resolveEnum(ctx, arg, str, ref) {
        return arg.enum[str];
    }
    resolveBoolean(ctx, arg, str, ref) {
        return str === "true" ?
            true :
            str === "false" ?
                false :
                undefined;
    }
    resolveMessage(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        const ch = (ref[arg.pointer] ?? ctx.channel);
        return (ch || undefined)?.messages?.fetch(str).catch(noop_1.default);
    }
    resolveChannel(ctx, arg, str, ref) {
        return ctx.client.channels.cache.get(str);
    }
    resolveGuild(ctx, arg, str, ref) {
        return ctx.client.guilds.cache.get(str);
    }
    resolveJson(ctx, arg, str, ref) {
        try {
            return JSON.parse(str);
        }
        catch (error) {
            return;
        }
    }
    resolveUser(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.users.fetch(str).catch(noop_1.default);
    }
    resolveGuildEmoji(ctx, arg, str, ref) {
        const parsed = (0, discord_js_1.parseEmoji)(str);
        const id = parsed?.id ?? str;
        return ctx.client.emojis.cache.get(id);
    }
    resolveForumTag(ctx, arg, str, ref) {
        return ref[arg.pointer].availableTags.find(x => x.id === str || x.name === str);
    }
    resolveGuildSticker(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ref[arg.pointer].stickers.fetch(str).catch(noop_1.default);
    }
    resolveMember(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ref[arg.pointer].members.fetch(str).catch(noop_1.default);
    }
    resolveReaction(ctx, arg, str, ref) {
        const reactions = ref[arg.pointer].reactions;
        const parsed = (0, discord_js_1.parseEmoji)(str);
        if (!parsed)
            return;
        const identifier = parsed.id ?? parsed.name;
        return reactions.cache.get(identifier);
    }
    resolveInvite(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.fetchInvite(str).catch(noop_1.default);
    }
    resolveWebhook(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.fetchWebhook(str).catch(noop_1.default);
    }
    resolveRole(ctx, arg, str, ref) {
        return ref[arg.pointer].roles.cache.get(str);
    }
    // TODO: turn arg types to methods to cache and increase performance
    async resolveArg(ctx, arg, field, value, ref) {
        const strValue = `${value}`;
        if (!arg.required && !value) {
            return Return_1.Return.success(value ?? null);
        }
        if (field !== undefined) {
            field.resolveArg ??= this[CompiledFunction.toResolveArgString(arg.type)];
            value = field.resolveArg(ctx, arg, strValue, ref);
            if (value instanceof Promise)
                value = await value;
        }
        if (value === undefined)
            return this.argTypeRejection(arg, strValue);
        if (value === null && arg.required) {
            return Return_1.Return.error(this.error(ForgeError_1.ErrorType.MissingArg, this.data.name, arg.name));
        }
        if (arg.check !== undefined && !arg.check(value))
            return this.argTypeRejection(arg, strValue);
        return Return_1.Return.success(value ?? null);
    }
    get hasFields() {
        return this.data.fields !== null;
    }
    error(type, ...args) {
        return new ForgeError_1.ForgeError(this, type, ...args);
    }
    async execute(ctx) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!this.fn.data.unwrap)
            return this.fn.data.execute.call(this, ctx);
        const args = await this.resolveArgs(ctx);
        if (!this.isValidReturnType(args))
            return args;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.fn.data.execute.call(this, ctx, args.value);
    }
    isValidReturnType(rt) {
        return rt.success;
    }
    static toResolveArgString(type) {
        return `resolve${NativeFunction_1.ArgType[type]}`;
    }
}
exports.CompiledFunction = CompiledFunction;
//# sourceMappingURL=CompiledFunction.js.map