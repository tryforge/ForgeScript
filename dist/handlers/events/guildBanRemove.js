"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildBanRemove",
    version: "1.4.0",
    description: "This event is fired when a member is unbanned from a guild",
    listener: async function (m) {
        const commands = this.commands.get("guildBanRemove");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m.user,
                command,
                client: this,
                states: {
                    ban: {
                        new: m
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildMembers"],
});
//# sourceMappingURL=guildBanRemove.js.map