"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "emojiUpdate",
    version: "1.0.1",
    intents: ["GuildEmojisAndStickers"],
    description: "This event is fired when an emoji is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("emojiUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    emoji: {
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
//# sourceMappingURL=emojiUpdate.js.map