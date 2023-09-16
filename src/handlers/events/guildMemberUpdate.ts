import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { InviteSystem } from "../../structures/InviteSystem"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildMemberUpdate",
    version: "1.0.1",
    description: "This event is fired when a member is updated in a guild",
    listener: async function (old, newer) {
        if (
            this.options.useInviteSystem &&
            newer.id === this.user.id &&
            !old.permissions.has("ManageGuild") &&
            newer.permissions.has("ManageGuild")
        ) {
            // We gained invite perms
            await InviteSystem.cache(newer.guild)
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
