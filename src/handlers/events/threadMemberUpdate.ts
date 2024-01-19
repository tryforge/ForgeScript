import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { InviteTracker } from "../../structures/trackers/InviteTracker"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "threadMemberUpdate",
    version: "1.0.1",
    description: "This event is fired when a thread member is updated in a guild",
    listener: async function (old, newer) {
        const commands = this.commands.get("threadMemberUpdate")

        for (const command of commands) {
            Interpreter.run({
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
            })
        }
    },
    intents: ["GuildMembers"],
})
