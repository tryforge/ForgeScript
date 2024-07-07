"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messagePollVoteAdd",
    version: "1.5.0",
    description: "This event is fired when a poll vote is added",
    listener: async function (answer, userId) {
        const user = await this.users.fetch(userId);
        const commands = this.commands.get("messagePollVoteAdd");
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
//# sourceMappingURL=messagePollVoteAdd.js.map