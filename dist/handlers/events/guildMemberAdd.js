"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildMemberAdd",
    version: "1.0.1",
    description: "This event is fired when a member joins the guild",
    listener: async function (m) {
        if (this.options.trackers?.invites)
            await InviteTracker_1.InviteTracker.findInviter(m);
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