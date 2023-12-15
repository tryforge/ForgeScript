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
const hex_1 = require("../functions/hex");
const node_util_1 = require("node:util");
class CompiledFunction {
    raw;
    static IdRegex = /^(\d{16,23})$/;
    static URLRegex = /^http?s:\/\//;
    data;
    fn;
    constructor(raw) {
        this.raw = raw;
        this.fn = FunctionManager_1.FunctionManager.get(raw.name);
        this.data = {
            ...raw,
            fields: raw.fields?.map((x) => !("op" in x)
                ? {
                    ...x,
                    functions: x.functions.map((x) => new CompiledFunction(x)),
                }
                : {
                    ...x,
                    lhs: {
                        ...x.lhs,
                        functions: x.lhs.functions.map((x) => new CompiledFunction(x)),
                    },
                    rhs: x.rhs
                        ? {
                            ...x.rhs,
                            functions: x.rhs.functions.map((x) => new CompiledFunction(x)),
                        }
                        : undefined,
                }) ?? null,
        };
    }
    displayField(i) {
        const field = this.data.fields[i];
        if ("op" in field) {
            if (field.rhs) {
                return `${field.lhs.resolve(field.lhs.functions.map((x) => x.display))}${field.op}${field.rhs.resolve(field.rhs.functions.map((x) => x.display))}`;
            }
            else
                return field.lhs.resolve(field.lhs.functions.map((x) => x.display));
        }
        return field.resolve(field.functions.map((x) => x.display));
    }
    get display() {
        if (this.data.fields === null)
            return this.data.name;
        else {
            const args = new Array();
            for (let i = 0, len = this.data.fields.length; i < len; i++) {
                args.push(this.displayField(i));
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
            return this.success(args);
        for (let i = 0, len = this.fn.data.args.length; i < len; i++) {
            const rt = await this.resolveUnhandledArg(ctx, i, args);
            if (!this.isValidReturnType(rt))
                return rt;
            args[i] = rt.value;
        }
        return this.success(args);
    }
    async resolveMultipleArgs(ctx, ...indexes) {
        const args = new Array(indexes.length);
        for (let i = 0, len = indexes.length; i < len; i++) {
            const index = indexes[i];
            const arg = await this.resolveUnhandledArg(ctx, index, args);
            if (!this.isValidReturnType(arg))
                return {
                    args,
                    return: arg,
                };
            args[i] = arg.value;
        }
        return {
            args,
            return: this.success(),
        };
    }
    /**
     * Does not account for condition fields.
     * @param ctx
     * @param index
     * @returns
     */
    async resolveUnhandledArg(ctx, i, ref = []) {
        const arg = this.fn.data.args[i];
        if (!arg.rest) {
            // Assertion because condition fields should never be executed with unwraps.
            const field = this.data.fields?.[i];
            const resolved = await this.resolveCode(ctx, field);
            if (!this.isValidReturnType(resolved))
                return resolved;
            const val = await this.resolveArg(ctx, arg, field, resolved.value, ref);
            if (!this.isValidReturnType(val))
                return val;
            return this.success(val.value);
        }
        else {
            const fields = this.data.fields?.slice(i);
            const values = new Array();
            if (!fields?.length) {
                return this.success(values);
            }
            for (let x = 0, len = fields.length; x < len; x++) {
                // Assertion because condition fields should never be executed with unwraps.
                const field = fields[x];
                const resolved = await this.resolveCode(ctx, field);
                if (!this.isValidReturnType(resolved))
                    return resolved;
                const val = await this.resolveArg(ctx, arg, field, resolved.value, ref);
                if (!this.isValidReturnType(val))
                    return val;
                values[x] = val.value;
            }
            return this.success(values);
        }
    }
    async resolveCondition(ctx, field) {
        const lhs = await this.resolveCode(ctx, field.lhs);
        if (!this.isValidReturnType(lhs))
            return lhs;
        if (field.rhs === undefined) {
            return this.success(field.resolve(lhs.value, null));
        }
        const rhs = await this.resolveCode(ctx, field.rhs);
        if (!this.isValidReturnType(rhs))
            return rhs;
        return this.success(field.resolve(lhs.value, rhs.value));
    }
    async resolveCode(ctx, { resolve: resolver, functions } = {}) {
        if (!resolver || !functions)
            return this.success(null);
        const args = new Array(functions.length);
        if (functions.length === 0)
            return this.success(resolver(args));
        for (let i = 0, len = functions.length; i < len; i++) {
            const fn = functions[i];
            const rt = await fn.execute(ctx);
            if (!this.isValidReturnType(rt))
                return rt;
            args[i] = rt.value;
        }
        return this.success(resolver(args));
    }
    argTypeRejection(arg, value) {
        return this.err(this.error(ForgeError_1.ErrorType.InvalidArgType, `${value}`, arg.name, NativeFunction_1.ArgType[arg.type]));
    }
    resolveNumber(ctx, arg, str, ref) {
        const value = Number(str);
        if (isNaN(value))
            return;
        return value;
    }
    resolveBigInt(ctx, arg, str, ref) {
        return BigInt(str);
    }
    resolveColor(ctx, arg, str, ref) {
        return (0, hex_1.resolveColor)(str);
    }
    resolvePermission(ctx, arg, str, ref) {
        if (!(str in discord_js_1.PermissionFlagsBits))
            return;
        return str;
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
        return str === "true" ? true : str === "false" ? false : undefined;
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
        return ref[arg.pointer].availableTags.find((x) => x.id === str || x.name === str);
    }
    resolveGuildSticker(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return (ref[arg.pointer] ?? ctx.guild).stickers.fetch(str).catch(noop_1.default);
    }
    resolveMember(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return (ref[arg.pointer] ?? ctx.guild).members.fetch(str).catch(noop_1.default);
    }
    resolveReaction(ctx, arg, str, ref) {
        const reactions = ref[arg.pointer].reactions;
        const parsed = (0, discord_js_1.parseEmoji)(str);
        if (!parsed)
            return;
        const identifier = parsed.id ?? parsed.name;
        return reactions.cache.get(identifier);
    }
    resolveURL(ctx, arg, str, ref) {
        if (!CompiledFunction.URLRegex.test(str)) {
            const em = (0, discord_js_1.parseEmoji)(str);
            if (em !== null)
                return `https://cdn.discordapp.com/emojis/${em.id}.${em.animated ? "gif" : "png"}?size=128&quality=lossless`;
            return;
        }
        return str;
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
        return (ref[arg.pointer] ?? ctx.guild).roles.cache.get(str);
    }
    resolveDate(ctx, arg, str, ref) {
        return new Date(str);
    }
    async resolveArg(ctx, arg, field, value, ref) {
        const strValue = `${value}`;
        if (!arg.required && !value) {
            return this.success(value ?? null);
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
            return this.err(this.error(ForgeError_1.ErrorType.MissingArg, this.data.name, arg.name));
        }
        if (arg.check !== undefined && !arg.check(value))
            return this.argTypeRejection(arg, strValue);
        return this.success(value ?? null);
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
        return this.fn.data.execute.call(this, ctx, args.value ?? []);
    }
    isValidReturnType(rt) {
        return rt.success;
    }
    async fail(ctx, code) {
        if (code) {
            const resolved = await this.resolveCode(ctx, code);
            if (!this["isValidReturnType"](resolved))
                return resolved;
            ctx.container.content = resolved.value;
            await ctx.container.send(ctx.obj);
        }
        return this.stop();
    }
    static toResolveArgString(type) {
        return `resolve${NativeFunction_1.ArgType[type]}`;
    }
    toExecutableCode(index) {
        return `
        fn = runtime.data.functions[${index}]
        rt = await fn.execute(ctx)

        if (!rt.success && !ctx.handleNotSuccess(rt)) return null

        args[${index}] = fn.data.negated ? null : rt.value
        `;
    }
    getFunction(fieldIndex, ref) {
        return this.getFunctions(fieldIndex, ref)?.[0];
    }
    getFunctions(fieldIndex, ref) {
        return this.hasFields ? this.data.fields[fieldIndex].functions.filter(x => x.data.name === ref.name) : new Array();
    }
    return(value) {
        return new Return_1.Return(Return_1.ReturnType.Return, value);
    }
    err(value) {
        return new Return_1.Return(Return_1.ReturnType.Error, value);
    }
    stop() {
        return new Return_1.Return(Return_1.ReturnType.Stop, null);
    }
    break() {
        return new Return_1.Return(Return_1.ReturnType.Break, null);
    }
    continue() {
        return new Return_1.Return(Return_1.ReturnType.Continue, null);
    }
    successJSON(value) {
        return this.success(typeof value !== "string" ? JSON.stringify(value, undefined, 4) : value);
    }
    successFormatted(value) {
        return this.success(typeof value !== "string" ? (0, node_util_1.inspect)(value, { depth: Infinity }) : value);
    }
    success(value = null) {
        return new Return_1.Return(Return_1.ReturnType.Success, this.data.negated ? null : value);
    }
}
exports.CompiledFunction = CompiledFunction;
//# sourceMappingURL=CompiledFunction.js.map