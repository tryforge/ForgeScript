"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "voiceStateUpdate",
    version: "1.0.1",
    description: "This event is fired when a user joins/leaves a voice channel",
    listener: async function (old, newer) {
        const commands = this.commands.get("voiceStateUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    voiceState: {
                        old,
                        new: newer,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildVoiceStates"],
});
//# sourceMappingURL=voiceStateUpdate.js.map