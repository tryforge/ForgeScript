import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "threadDelete",
    version: "1.4.0",
    description: "This event is fired when a thread is deleted",
    listener: async function (ch) {
        const commands = this.commands.get("threadDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    channel: {
                        new: ch,
                        old: ch,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds"],
})
