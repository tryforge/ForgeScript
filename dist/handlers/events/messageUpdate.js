"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageUpdate",
    version: "1.0.1",
    description: "This event is fired when a message is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("messageUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    message: {
                        old: old,
                        new: newer,
                    },
                },
                data: command.compiled.code,
                args: newer.content?.split(/ +/),
            });
        }
    },
    intents: ["GuildMessages"],
});
//# sourceMappingURL=messageUpdate.js.map