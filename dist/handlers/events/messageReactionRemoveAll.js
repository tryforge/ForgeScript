"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageReactionRemoveAll",
    version: "1.4.0",
    description: "This event is fired when all emojis are removed from a message's reactions",
    intents: ["GuildMessageReactions", "DirectMessageReactions"],
    listener: async function (m) {
        const commands = this.commands.get("messageReactionRemoveAll");
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
});
//# sourceMappingURL=messageReactionRemoveAll.js.map