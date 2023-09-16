"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const InviteSystem_1 = require("../../structures/InviteSystem");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildMemberRemove",
    version: "1.0.1",
    description: "This event is fired when a member leaves, is kicked or banned from a guild",
    listener: async function (m) {
        if (this.options.useInviteSystem)
            InviteSystem_1.InviteSystem.deleteInviter(m);
        const commands = this.commands.get("guildMemberRemove");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    member: {
                        old: m,
                        new: m,
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildMembers"],
});
//# sourceMappingURL=guildMemberRemove.js.map