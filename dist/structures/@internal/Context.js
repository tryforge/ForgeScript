"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.HTTPContentType = void 0;
const discord_js_1 = require("discord.js");
const Container_1 = require("./Container");
const Return_1 = require("./Return");
const Logger_1 = require("./Logger");
const contextNoop_1 = __importDefault(require("../../functions/contextNoop"));
var HTTPContentType;
(function (HTTPContentType) {
    HTTPContentType[HTTPContentType["Json"] = 0] = "Json";
    HTTPContentType[HTTPContentType["Text"] = 1] = "Text";
})(HTTPContentType || (exports.HTTPContentType = HTTPContentType = {}));
class Context {
    runtime;
    #cache = {};
    executionTimestamp;
    http = {};
    #keywords = {};
    #environment = {};
    container;
    // eslint-disable-next-line no-unused-vars
    constructor(runtime) {
        this.runtime = runtime;
        if (runtime.environment)
            this.#environment = runtime.environment;
        if (runtime.keywords)
            this.#keywords = runtime.keywords;
        this.container = runtime.container ??= new Container_1.Container();
    }
    get client() {
        return this.runtime.client;
    }
    set obj(o) {
        this.runtime.obj = o;
        this.clearCache();
    }
    get cmd() {
        return this.runtime.command;
    }
    get obj() {
        return this.runtime.obj;
    }
    get args() {
        return this.runtime.args ?? [];
    }
    get states() {
        return this.runtime.states;
    }
    get automod() {
        return this.#cache.automod ??= this.obj instanceof discord_js_1.AutoModerationActionExecution ? this.obj : null;
    }
    get member() {
        return (this.#cache.member ??=
            this.obj instanceof discord_js_1.GuildMember
                ? this.obj
                : "member" in this.obj && this.obj.member instanceof discord_js_1.GuildMember
                    ? this.obj.member
                    : null);
    }
    get emoji() {
        return (this.#cache.emoji ??= this.obj instanceof discord_js_1.GuildEmoji ? this.obj : null);
    }
    get sticker() {
        return (this.#cache.sticker ??= this.obj instanceof discord_js_1.Sticker ? this.obj : null);
    }
    get role() {
        return (this.#cache.role ??= this.obj instanceof discord_js_1.Role ? this.obj : null);
    }
    get reaction() {
        return (this.#cache.reaction ??= this.obj instanceof discord_js_1.MessageReaction ? this.obj : null);
    }
    get message() {
        return (this.#cache.message ??=
            "message" in this.obj && this.obj.message
                ? this.obj.message
                : this.obj instanceof discord_js_1.Message
                    ? this.obj
                    : null);
    }
    get interaction() {
        return (this.#cache.interaction ??= this.obj instanceof discord_js_1.BaseInteraction ? this.obj : null);
    }
    get user() {
        return (this.#cache.user ??=
            "user" in this.obj
                ? this.obj.user
                : "author" in this.obj
                    ? this.obj.author
                    : this.obj instanceof discord_js_1.User
                        ? this.obj
                        : "member" in this.obj
                            ? this.obj.member?.user ?? null
                            : null);
    }
    get guild() {
        return (this.#cache.guild ??=
            "guild" in this.obj
                ? this.obj.guild
                : this.obj instanceof discord_js_1.Guild
                    ? this.obj
                    : "message" in this.obj
                        ? this.obj.message.guild
                        : null);
    }
    get channel() {
        return (this.#cache.channel ??=
            "channel" in this.obj
                ? this.obj.channel?.partial
                    ? null
                    : this.obj.channel
                : this.obj instanceof discord_js_1.BaseChannel
                    ? this.obj
                    : "message" in this.obj
                        ? this.obj.message.channel
                        : null);
    }
    async handle(fn, cb) {
        const unwrap = await fn["resolveArgs"](this);
        // If not success, return error.
        if (!unwrap.success) {
            return unwrap;
        }
        // Call the callback.
        return cb(unwrap.value);
    }
    alert(content) {
        if (this.runtime.redirectErrorsToConsole) {
            Logger_1.Logger.error(content);
            return Promise.resolve();
        }
        this.container.reset();
        return this.container.send(this.obj, content);
    }
    handleNotSuccess(rt) {
        if (rt.return && this.runtime.allowTopLevelReturn) {
            throw new Return_1.Return(Return_1.ReturnType.Return, rt.value);
        }
        else if (rt.return || rt.break || rt.continue) {
            const log = ":x: " + Return_1.ReturnType[rt.type] + " statements are not allowed in outer scopes.";
            this.alert(log).catch(Logger_1.Logger.error.bind(null, log));
        }
        else if (rt.error) {
            const err = rt.value;
            this.alert(err.message).catch(Logger_1.Logger.error.bind(null, err));
        }
        return false;
    }
    clearHttpOptions() {
        this.http = {};
    }
    setEnvironmentKey(name, value) {
        return (this.#environment[name] = value);
    }
    traverseDeleteEnvironmentKey(...keys) {
        let data = this.#environment;
        for (let i = 0, len = keys.length - 1; i < len; i++) {
            const key = keys[i];
            if (!(key in data))
                return false;
            data = data[key];
        }
        const key = keys[keys.length - 1];
        if (Array.isArray(data))
            return data.splice(Number(key), 1);
        return delete data[key];
    }
    traverseAddEnvironmentKey(value, ...keys) {
        let data = this.#environment;
        for (let i = 0, len = keys.length - 1; i < len; i++) {
            const key = keys[i];
            if (!(key in data))
                return false;
            data = data[key];
        }
        const lastKey = keys[keys.length - 1];
        data[lastKey] = value;
        return true;
    }
    deleteEnvironmentKey(name) {
        return delete this.#environment[name];
    }
    static traverseGetValue(previous, ...args) {
        if (!previous)
            return previous;
        for (let i = 0, len = args.length; i < len; i++) {
            const key = args[i];
            if (!(key in previous))
                return;
            previous = previous[key];
            if (typeof previous !== "object" || previous === null)
                break;
        }
        return previous;
    }
    getEnvironmentKey(...args) {
        return Context.traverseGetValue(this.#environment, ...args);
    }
    getKeyword(name) {
        return this.#keywords[name];
    }
    deleteKeyword(name) {
        return delete this.#keywords[name];
    }
    setKeyword(name, value) {
        return (this.#keywords[name] = value);
    }
    hasKeyword(name) {
        return name in this.#keywords;
    }
    clearKeywords() {
        this.#keywords = {};
    }
    clearEnvironment() {
        this.#environment = {};
    }
    isSelectMenu() {
        return !!this.interaction && this.interaction.isAnySelectMenu();
    }
    isContextCommand() {
        return !!this.interaction && this.interaction.isContextMenuCommand();
    }
    isCommand() {
        return !!this.interaction && this.interaction.isChatInputCommand();
    }
    getEnvironmentInstance(type, ...keys) {
        const got = this.getEnvironmentKey(...keys);
        return (got && got instanceof type ? got : null);
    }
    hasInstance(key, type) {
        return this[key] !== undefined && this[key] instanceof type;
    }
    get(key) {
        return this[key];
    }
    hasDisabledConsoleErrors() {
        return this.runtime.disableConsoleErrors || (this.runtime.disableConsoleErrors === undefined && this.cmd?.hasDisabledConsoleErrors(this.client));
    }
    getInstance(key, type) {
        if (this.hasInstance(key, type))
            return this[key];
        return null;
    }
    error() {
        throw null;
    }
    get getExtension() {
        return this.client.getExtension.bind(this.client);
    }
    cloneEmpty() {
        return new Context({ ...this.runtime });
    }
    /**
     * Clones keywords and environment vars
     * @returns
     */
    clone(props, syncVars = false) {
        const empty = this.cloneEmpty();
        empty.#keywords = syncVars ? this.#keywords : { ...this.#keywords };
        empty.#environment = syncVars ? this.#environment : { ...this.#environment };
        if (props) {
            const keys = Object.keys(props);
            for (let i = 0, len = keys.length; i < len; i++) {
                const key = keys[i];
                Reflect.set(empty.runtime, key, props[key]);
            }
        }
        return empty;
    }
    clearCache() {
        this.#cache = {};
    }
    get noop() {
        return contextNoop_1.default.bind(this);
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map