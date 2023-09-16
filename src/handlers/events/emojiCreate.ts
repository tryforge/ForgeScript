import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "emojiCreate",
    version: "1.0.1",
    description: "This event is fired when a emoji is created",
    listener: async function (g) {
        const commands = this.commands.get("emojiCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    emoji: {
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildEmojisAndStickers"],
})
