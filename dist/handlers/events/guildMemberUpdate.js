"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const InviteSystem_1 = require("../../structures/InviteSystem");
const DiscordEventHandler_1 = require("../../structures/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildMemberUpdate",
    version: "1.0.1",
    description: "This event is fired when a member is updated in a guild",
    listener: async function (old, newer) {
        if (this.options.useInviteSystem &&
            newer.id === this.user.id &&
            !old.permissions.has("ManageGuild") &&
            newer.permissions.has("ManageGuild")) {
            // We gained invite perms
            await InviteSystem_1.InviteSystem.cache(newer.guild);
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