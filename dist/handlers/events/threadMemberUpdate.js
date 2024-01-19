"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "threadMemberUpdate",
    version: "1.0.1",
    description: "This event is fired when a thread member is updated in a guild",
    listener: async function (old, newer) {
        const commands = this.commands.get("threadMemberUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                states: {
                    member: {
                        old: old.guildMember,
                        new: newer.guildMember,
                    },
                },
                client: this,
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildMembers"],
});
//# sourceMappingURL=threadMemberUpdate.js.map