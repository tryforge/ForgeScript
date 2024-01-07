"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "stickerCreate",
    version: "1.4.0",
    description: "This event is fired when an sticker is created",
    listener: async function (g) {
        const commands = this.commands.get("stickerCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    sticker: {
                        old: g,
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
//# sourceMappingURL=stickerCreate.js.map