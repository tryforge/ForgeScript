"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "autoModerationActionExecution",
    version: "1.2.0",
    listener: async function (m) {
        const commands = this.commands.get("autoModerationActionExecution");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            });
        }
    },
    description: "This event is fired when a automod is fired under a message",
    intents: ["Guilds", "AutoModerationExecution"],
});
//# sourceMappingURL=autoModerationActionExecution.js.map