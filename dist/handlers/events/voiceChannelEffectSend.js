"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "voiceChannelEffectSend",
    version: "2.3.0",
    description: "This event is fired when a user sends an effect in a voice channel",
    listener: async function (effect) {
        const commands = this.commands.get("voiceChannelEffectSend");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: effect,
                command,
                client: this,
                states: {
                    voiceEffect: {
                        new: effect
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
});
//# sourceMappingURL=voiceChannelEffectSend.js.map