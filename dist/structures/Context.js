"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const discord_js_1 = require("discord.js");
const Container_1 = require("./Container");
const Return_1 = require("./Return");
class Context {
    runtime;
    #member;
    #user;
    #guild;
    #channel;
    #message;
    #interaction;
    #role;
    #reaction;
    #emoji;
    #automod;
    executionTimestamp;
    http = {};
    #keywords = {};
    #environment = {};
    container = new Container_1.Container();
    // eslint-disable-next-line no-unused-vars
    constructor(runtime) {
        this.runtime = runtime;
        if (runtime.environment)
            this.#environment = runtime.environment;
        if (runtime.keywords)
            this.#keywords = runtime.keywords;
    }
    get client() {
        return this.runtime.client;
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
        return this.#automod ??= this.obj instanceof discord_js_1.AutoModerationActionExecution ? this.obj : null;
    }
    get member() {
        if (!this.obj)
            return null;
        return (this.#member ??=
            this.obj instanceof discord_js_1.GuildMember
                ? this.obj
                : "member" in this.obj && this.obj.member instanceof discord_js_1.GuildMember
                    ? this.obj.member
                    : null);
    }
    get emoji() {
        if (!this.obj)
            return null;
        return (this.#emoji ??= this.obj instanceof discord_js_1.GuildEmoji ? this.obj : null);
    }
    get role() {
        if (!this.obj)
            return null;
        return (this.#role ??= this.obj instanceof discord_js_1.Role ? this.obj : null);
    }
    get reaction() {
        if (!this.obj)
            return null;
        return (this.#reaction ??= this.obj instanceof discord_js_1.MessageReaction ? this.obj : null);
    }
    get message() {
        if (!this.obj)
            return null;
        return (this.#message ??=
            "message" in this.obj && this.obj.message
                ? this.obj.message
                : this.obj instanceof discord_js_1.Message
                    ? this.obj
                    : null);
    }
    get interaction() {
        if (!this.obj)
            return null;
        return (this.#interaction ??= this.obj instanceof discord_js_1.BaseInteraction ? this.obj : null);
    }
    get user() {
        if (!this.obj)
            return null;
        return (this.#user ??=
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
        if (!this.obj)
            return null;
        return (this.#guild ??=
            "guild" in this.obj
                ? this.obj.guild
                : this.obj instanceof discord_js_1.Guild
                    ? this.obj
                    : "message" in this.obj
                        ? this.obj.message.guild
                        : null);
    }
    get channel() {
        if (!this.obj)
            return null;
        return (this.#channel ??=
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
        this.container.reset();
        return this.container.send(this.obj, content);
    }
    handleNotSuccess(rt) {
        if (rt.return || rt.break || rt.continue) {
            const log = ":x: " + Return_1.ReturnType[rt.type] + " statements are not allowed in outer scopes.";
            this.alert(log).catch(console.error.bind(null, log));
        }
        else if (rt.error) {
            const err = rt.value;
            this.alert(err.message).catch(console.error.bind(null, err));
        }
        return false;
    }
    clearHttpOptions() {
        this.http = {};
    }
    setEnvironmentKey(name, value) {
        return (this.#environment[name] = value);
    }
    deleteEnvironmentKey(name) {
        return delete this.#environment[name];
    }
    getEnvironmentKey(...args) {
        let previous = this.#environment;
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
        return got && got instanceof type ? got : null;
    }
    get(key) {
        return this[key];
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map