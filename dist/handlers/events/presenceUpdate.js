"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "presenceUpdate",
    version: "1.1.0",
    description: "This event is fired when a presence is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("presenceUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    presence: {
                        old,
                        new: newer,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "GuildPresences"],
});
//# sourceMappingURL=presenceUpdate.js.map