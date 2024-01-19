import { Message } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageDelete",
    version: "1.0.1",
    description: "This event is fired when a message is deleted",
    listener: async function (m) {
        const commands = this.commands.get("messageDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: m as Message,
                command,
                client: this,
                states: {
                    message: {
                        old: m as Message,
                        new: m as Message,
                    },
                },
                data: command.compiled.code,
                args: m.content?.split(/ +/),
            })
        }
    },
    intents: ["GuildMessages", "DirectMessages"],
})
