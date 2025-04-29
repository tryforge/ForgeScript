import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "emojiUpdate",
    version: "1.0.1",
    intents: ["GuildExpressions"],
    description: "This event is fired when an emoji is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("emojiUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    emoji: {
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
