"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "stickerDelete",
    version: "1.4.0",
    description: "This event is fired when an sticker is deleted",
    listener: async function (g) {
        const commands = this.commands.get("stickerDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    sticker: {
                        old: g,
                        new: g
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildEmojisAndStickers"],
});
//# sourceMappingURL=stickerDelete.js.map