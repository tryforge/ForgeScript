import { GuildScheduledEvent } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "guildScheduledEventUserRemove",
    version: "1.4.0",
    description: "This event is called when a user is removed from a schedule event",
    listener: async function (m, user) {
        const commands = this.commands.get("guildScheduledEventUserRemove")

        for (const command of commands) {
            Interpreter.run({
                obj: user,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: m as GuildScheduledEvent,
                        old: m as GuildScheduledEvent
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildScheduledEvents"],
})
