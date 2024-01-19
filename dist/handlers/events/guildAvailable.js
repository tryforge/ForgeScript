"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildAvailable",
    version: "1.4.0",
    description: "This event is fired when a guild becomes available",
    listener: async function (g) {
        const commands = this.commands.get("guildAvailable");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds"],
});
//# sourceMappingURL=guildAvailable.js.map