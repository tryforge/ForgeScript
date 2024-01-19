"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeClient = void 0;
const discord_js_1 = require("discord.js");
const _1 = require(".");
const managers_1 = require("../managers");
const structures_1 = require("../structures");
const VoiceTracker_1 = require("../structures/trackers/VoiceTracker");
const Interpreter_1 = require("./Interpreter");
(0, discord_js_1.disableValidators)();
class ForgeClient extends discord_js_1.Client {
    commands = new managers_1.NativeCommandManager(this);
    applicationCommands = new managers_1.ApplicationCommandManager(this);
    events = new managers_1.EventManager(this);
    cooldowns = new managers_1.CooldownManager(this);
    functions = new managers_1.ForgeFunctionManager(this);
    threading = new managers_1.ThreadManager(this);
    constructor(options) {
        super({
            partials: [
                discord_js_1.Partials.Channel,
                discord_js_1.Partials.GuildMember,
                discord_js_1.Partials.GuildScheduledEvent,
                discord_js_1.Partials.Message,
                discord_js_1.Partials.Reaction,
                discord_js_1.Partials.ThreadMember,
                discord_js_1.Partials.User,
            ],
            ...options,
        });
        this.#init(options);
    }
    #init(raw) {
        if (this.options.logLevel !== undefined)
            structures_1.Logger.Priority = this.options.logLevel;
        if (this.options.mobile) {
            Reflect.set(discord_js_1.DefaultWebSocketManagerOptions.identifyProperties, "browser", "Discord iOS");
        }
        if (this.options.useInviteSystem) {
            this.options.trackers ??= {};
            this.options.trackers.invites = true;
            structures_1.Logger.deprecated("ForgeClient#useInviteSystem is deprecated and will be removed in future versions, please use ForgeClient#trackers#invites instead.");
        }
        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length; i < len; i++) {
                this.options.extensions[i]["validateAndInit"](this);
            }
        }
        managers_1.FunctionManager.loadNative();
        managers_1.EventManager.loadNative();
        if (this.options.trackers) {
            if (this.options.trackers.invites)
                structures_1.InviteTracker["init"](this);
            if (this.options.trackers.voice)
                VoiceTracker_1.VoiceTracker["init"](this);
        }
        if (this.options.commands) {
            this.commands.load(this.options.commands);
        }
        if (this.options.functions) {
            this.functions.load(this.options.functions);
        }
        if (this.options.events?.length) {
            this.events.load(managers_1.NativeEventName, this.options.events);
        }
        // At last, load prefixes
        this.options.prefixes = raw.prefixes?.map((x) => _1.Compiler.compile(x)) ?? [];
    }
    getExtension(type, required) {
        const finder = this.options.extensions?.find((x) => typeof type === "string" ? x.name === type : x instanceof type);
        if (!finder && required) {
            throw new structures_1.ForgeError(null, structures_1.ErrorType.ExtensionNotFound, type.constructor.name);
        }
        return (finder ?? null);
    }
    get(key) {
        return this[key];
    }
    get version() {
        return require("../../package.json").version;
    }
    async getPrefix(msg) {
        for (let i = 0, len = this.options.prefixes.length; i < len; i++) {
            const raw = this.options.prefixes[i];
            const resolved = await Interpreter_1.Interpreter.run({
                client: this,
                command: null,
                data: raw,
                obj: msg,
                redirectErrorsToConsole: true,
                doNotSend: true,
            });
            if (resolved !== null && msg.content.startsWith(resolved.toLowerCase())) {
                return resolved;
            }
        }
        return null;
    }
    canRespondToBots(cmd) {
        return !!cmd.data.allowBots || (!!this.options.allowBots && cmd.data.allowBots === undefined);
    }
    /**
     * Returns all available command managers
     */
    get commandManagers() {
        const arr = new Array(this.commands);
        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length; i < len; i++) {
                const ext = this.options.extensions[i];
                const manager = ext.getCommandManager();
                if (!manager)
                    continue;
                arr.push(manager);
            }
        }
        return arr;
    }
    login(token) {
        return super.login(token ?? this.options.token).then(async (str) => {
            await this.applicationCommands.registerGlobal();
            return str;
        });
    }
}
exports.ForgeClient = ForgeClient;
//# sourceMappingURL=ForgeClient.js.map