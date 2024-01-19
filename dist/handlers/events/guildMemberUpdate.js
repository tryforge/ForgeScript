"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildMemberUpdate",
    version: "1.0.1",
    description: "This event is fired when a member is updated in a guild",
    listener: async function (old, newer) {
        if (this.options.trackers?.invites &&
            newer.id === this.user.id &&
            !old.permissions.has("ManageGuild") &&
            newer.permissions.has("ManageGuild")) {
            // We gained invite perms
            await InviteTracker_1.InviteTracker.cache(newer.guild);
        }
        const commands = this.commands.get("guildMemberUpdate");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: newer,
                command,
                states: {
                    member: {
                        old: old,
                        new: newer,
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
//# sourceMappingURL=guildMemberUpdate.js.map