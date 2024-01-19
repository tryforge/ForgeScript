"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
const messageCreate_1 = __importDefault(require("./messageCreate"));
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageUpdate",
    version: "1.0.1",
    description: "This event is fired when a message is updated",
    listener: async function (old, newer) {
        if (newer instanceof discord_js_1.Message && this.options.respondOnEdit) {
            if (typeof this.options.respondOnEdit !== "number" || Date.now() - newer.createdTimestamp <= this.options.respondOnEdit) {
                await messageCreate_1.default.listener.call(this, newer);
            }
        }
        const commands = this.commands.get("messageUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    message: {
                        old: old,
                        new: newer,
                    },
                },
                data: command.compiled.code,
                args: newer.content?.split(/ +/),
            });
        }
    },
    intents: ["GuildMessages"],
});
//# sourceMappingURL=messageUpdate.js.map