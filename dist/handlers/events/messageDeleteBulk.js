"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageDeleteBulk",
    version: "1.4.0",
    description: "This event is fired when a row of messages is deleted",
    listener: async function (ch, channel) {
        const commands = this.commands.get("messageDeleteBulk");
        const asArray = ch instanceof discord_js_1.Collection ? Array.from(ch.values()) : [ch];
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: channel,
                command,
                client: this,
                states: {
                    bulk: {
                        new: asArray
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "GuildMessages"],
});
//# sourceMappingURL=messageDeleteBulk.js.map