"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildSoundboardSoundUpdate",
    version: "2.4.0",
    description: "This event is fired when a soundboard sound is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("guildSoundboardSoundUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    soundboardSound: {
                        old,
                        new: newer
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildExpressions"],
});
//# sourceMappingURL=guildSoundboardSoundUpdate.js.map