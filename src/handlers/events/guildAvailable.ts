import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "guildAvailable",
    version: "1.4.0",
    description: "This event is fired when a guild becomes available",
    listener: async function (g) {
        const commands = this.commands.get("guildAvailable")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds"],
})
