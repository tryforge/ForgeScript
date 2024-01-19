import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { InviteTracker } from "../../structures/trackers/InviteTracker"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildMemberUpdate",
    version: "1.0.1",
    description: "This event is fired when a member is updated in a guild",
    listener: async function (old, newer) {
        if (
            this.options.trackers?.invites &&
            newer.id === this.user.id &&
            !old.permissions.has("ManageGuild") &&
            newer.permissions.has("ManageGuild")
        ) {
            // We gained invite perms
            await InviteTracker.cache(newer.guild)
        }

        const commands = this.commands.get("guildMemberUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer as GuildMember,
                command,
                states: {
                    member: {
                        old: old as GuildMember,
                        new: newer as GuildMember,
                    },
                },
                client: this,
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildMembers"],
})
