import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "channelUpdate",
    version: "1.0.1",
    intents: ["Guilds"],
    description: "This event is fired when a channel is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("channelUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    channel: {
                        new: newer,
                        old,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
})
