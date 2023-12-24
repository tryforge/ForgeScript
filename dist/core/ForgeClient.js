"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeClient = void 0;
const discord_js_1 = require("discord.js");
const EventManager_1 = require("../managers/EventManager");
const Compiler_1 = require("./Compiler");
const FunctionManager_1 = require("../managers/FunctionManager");
const ForgeFunctionManager_1 = require("../managers/ForgeFunctionManager");
const InviteTracker_1 = require("../structures/trackers/InviteTracker");
const CooldownManager_1 = require("../managers/CooldownManager");
const NativeCommandManager_1 = require("../managers/NativeCommandManager");
const ApplicationCommandManager_1 = require("../managers/ApplicationCommandManager");
const ThreadManager_1 = require("../managers/ThreadManager");
const Logger_1 = require("../structures/@internal/Logger");
const VoiceTracker_1 = require("../structures/trackers/VoiceTracker");
(0, discord_js_1.disableValidators)();
class ForgeClient extends discord_js_1.Client {
    commands = new NativeCommandManager_1.NativeCommandManager(this);
    applicationCommands = new ApplicationCommandManager_1.ApplicationCommandManager(this);
    events = new EventManager_1.EventManager(this);
    cooldowns = new CooldownManager_1.CooldownManager(this);
    functions = new ForgeFunctionManager_1.ForgeFunctionManager(this);
    threading = new ThreadManager_1.ThreadManager(this);
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
        this.#init();
    }
    #init() {
        if (this.options.logLevel !== undefined)
            Logger_1.Logger.Priority = this.options.logLevel;
        if (this.options.mobile) {
            Reflect.set(discord_js_1.DefaultWebSocketManagerOptions.identifyProperties, "browser", "Discord iOS");
        }
        if (this.options.useInviteSystem) {
            this.options.trackers ??= {};
            this.options.trackers.invites = true;
            Logger_1.Logger.deprecated("ForgeClient#useInviteSystem is deprecated and will be removed in future versions, please use ForgeClient#trackers#invites instead.");
        }
        if (this.options.trackers) {
            if (this.options.trackers.invites)
                InviteTracker_1.InviteTracker["init"](this);
            if (this.options.trackers.voice)
                VoiceTracker_1.VoiceTracker["init"](this);
        }
        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length; i < len; i++) {
                this.options.extensions[i]["validateAndInit"](this);
            }
        }
        FunctionManager_1.FunctionManager.loadNative();
        if (this.options.disableFunctions?.length)
            FunctionManager_1.FunctionManager.disable(this.options.disableFunctions);
        Compiler_1.Compiler.setFunctions(FunctionManager_1.FunctionManager.raw);
        if (this.options.commands) {
            this.commands.load(this.options.commands);
        }
        if (this.options.functions) {
            this.functions.load(this.options.functions);
        }
        if (this.options.events?.length) {
            this.events.load(EventManager_1.NativeEventName, this.options.events);
        }
    }
    get(key) {
        return this[key];
    }
    get version() {
        return require("../../package.json").version;
    }
    canRespondToBots(cmd) {
        return !!cmd.data.allowBots || (!!this.options.allowBots && cmd.data.allowBots === undefined);
    }
    login(token) {
        return super.login(token ?? this.options.token).then(async (str) => {
            await this.applicationCommands.register();
            return str;
        });
    }
}
exports.ForgeClient = ForgeClient;
//# sourceMappingURL=ForgeClient.js.map