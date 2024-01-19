"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "typingStart",
    version: "1.4.0",
    listener: async function (typing) {
        const commands = this.commands.get("typingStart");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: typing.member ?? typing.user,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            });
        }
    },
    description: "This event is fired when a user starts typing",
    intents: ["GuildMessageTyping", "DirectMessageTyping"],
});
//# sourceMappingURL=typingStart.js.map