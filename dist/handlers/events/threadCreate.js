"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "threadCreate",
    description: "This event is fired when a thread is created",
    listener: async function (ch) {
        const commands = this.commands.get("threadCreate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    channel: {
                        new: ch,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds"],
});
//# sourceMappingURL=threadCreate.js.map