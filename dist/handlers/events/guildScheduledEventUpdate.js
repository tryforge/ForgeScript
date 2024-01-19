"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildScheduledEventUpdate",
    version: "1.4.0",
    description: "This event is called when a schedule event is updated",
    listener: async function (old, now) {
        const commands = this.commands.get("guildScheduledEventUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: now,
                        old: old
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildScheduledEvents"],
});
//# sourceMappingURL=guildScheduledEventUpdate.js.map