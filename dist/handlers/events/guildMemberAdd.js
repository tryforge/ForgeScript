"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
const InviteSystem_1 = require("../../structures/InviteSystem");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildMemberAdd",
    version: "1.0.1",
    description: "This event is fired when a member joins the guild",
    listener: async function (m) {
        if (this.options.useInviteSystem)
            await InviteSystem_1.InviteSystem.findInviter(m);
        const commands = this.commands.get("guildMemberAdd");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    member: {
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
//# sourceMappingURL=guildMemberAdd.js.map