import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "presenceUpdate",
    version: "1.1.0",
    description: "This event is fired when a presence is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("presenceUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    presence: {
                        old,
                        new: newer,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "GuildPresences"],
})
