"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "stickerUpdate",
    version: "1.4.0",
    description: "This event is fired when an sticker is updated",
    listener: async function (old, now) {
        const commands = this.commands.get("stickerUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    sticker: {
                        old,
                        new: now,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildEmojisAndStickers"],
});
//# sourceMappingURL=stickerUpdate.js.map