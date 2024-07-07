"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messagePollVoteRemove",
    version: "1.5.0",
    description: "This event is fired when a poll vote is removed",
    listener: async function (answer, userId) {
        const user = await this.users.fetch(userId);
        const commands = this.commands.get("messagePollVoteRemove");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: user,
                command,
                client: this,
                states: {
                    poll: {
                        new: answer,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["Guilds", "GuildMessagePolls", "DirectMessagePolls"],
});
//# sourceMappingURL=messagePollVoteRemove.js.map