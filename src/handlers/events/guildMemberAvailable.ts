import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "guildMemberAvailable",
    version: "1.4.0",
    description: "This event is fired when a member of a guild becomes available",
    listener: async function (m) {
        if (this.options.trackers?.invites) await InviteTracker.findInviter(m)

        const commands = this.commands.get("guildMemberAvailable")

        for (const command of commands) {
            Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    member: {
                        new: m as GuildMember,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildMembers"],
})
