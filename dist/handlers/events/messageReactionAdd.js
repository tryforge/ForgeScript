"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "messageReactionAdd",
    version: "1.0.1",
    description: "This event is fired when a reaction is added",
    listener: async function (m, user) {
        const commands = this.commands.get("messageReactionAdd");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    user: {
                        new: user,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildMessageReactions", "DirectMessageReactions"],
});
//# sourceMappingURL=messageReactionAdd.js.map