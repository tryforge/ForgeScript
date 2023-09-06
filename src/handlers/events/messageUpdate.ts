import { Message } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler(
    {
        name: "messageUpdate",
        version: "1.0.1",
        description: "This event is fired when a message is updated",
        listener: async function(old, newer) {
            const commands = this.commands.get("messageUpdate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: newer as Message,
                    command,
                    client: this,
                    states: {
                        message: {
                            old: old as Message,
                            new: newer as Message
                        }
                    },
                    data: command.compiled.code,
                    args: newer.content?.split(/ +/)
                })
            }
        },
        intents: [
            "GuildMessages"
        ]
    }
)