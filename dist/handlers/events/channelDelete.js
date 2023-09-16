"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "channelDelete",
    version: "1.0.1",
    description: "This event is fired when a channel is deleted",
    listener: async function (ch) {
        const commands = this.commands.get("channelDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    channel: {
                        new: ch,
                        old: ch,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds"],
});
//# sourceMappingURL=channelDelete.js.map