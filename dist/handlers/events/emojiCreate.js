"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "emojiCreate",
    version: "1.0.1",
    description: "This event is fired when an emoji is created",
    listener: async function (g) {
        const commands = this.commands.get("emojiCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    emoji: {
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildEmojisAndStickers"],
});
//# sourceMappingURL=emojiCreate.js.map