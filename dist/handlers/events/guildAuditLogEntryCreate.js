"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildAuditLogEntryCreate",
    version: "1.0.3",
    description: "This event is fired when a guild audit log entry is created",
    listener: async function (g, guild) {
        const commands = this.commands.get("guildAuditLogEntryCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: guild,
                command,
                client: this,
                states: {
                    audit: {
                        new: g,
                        old: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "GuildModeration"],
});
//# sourceMappingURL=guildAuditLogEntryCreate.js.map