"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "channelUpdate",
    version: "1.0.1",
    intents: ["Guilds"],
    description: "This event is fired when a channel is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("channelUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    channel: {
                        new: newer,
                        old,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
});
//# sourceMappingURL=channelUpdate.js.map