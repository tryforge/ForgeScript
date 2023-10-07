"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "userUpdate",
    version: "1.0.1",
    listener: async function (old, newer) {
        const commands = this.commands.get("userUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    user: {
                        new: newer,
                        old: old,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    description: "This event is fired when a user updates their profile",
    intents: ["GuildMembers"],
});
//# sourceMappingURL=userUpdate.js.map