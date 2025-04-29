"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildSoundboardSoundCreate",
    version: "2.4.0",
    description: "This event is fired when a soundboard sound is created",
    listener: async function (s) {
        const commands = this.commands.get("guildSoundboardSoundCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: s,
                command,
                client: this,
                states: {
                    soundboardSound: {
                        new: s,
                        old: s
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildExpressions"],
});
//# sourceMappingURL=guildSoundboardSoundCreate.js.map