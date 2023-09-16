"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageDelete",
    version: "1.0.1",
    description: "This event is fired when a message is deleted",
    listener: async function (m) {
        const commands = this.commands.get("messageDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    message: {
                        old: m,
                        new: m,
                    },
                },
                data: command.compiled.code,
                args: m.content?.split(/ +/),
            });
        }
    },
    intents: ["GuildMessages", "DirectMessages"],
});
//# sourceMappingURL=messageDelete.js.map