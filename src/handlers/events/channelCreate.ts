import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "channelCreate",
    version: "1.0.1",
    description: "This event is fired when a channel is created",
    listener: async function (ch) {
        const commands = this.commands.get("channelCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    channel: {
                        new: ch,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds"],
})
