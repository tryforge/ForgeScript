import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "guildCreate",
    version: "1.0.1",
    description: "This event is fired when the bot is added to a guild",
    listener: async function (g) {
        if (this.options.trackers?.invites) await InviteTracker.cache(g)

        const commands = this.commands.get("guildCreate")

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
