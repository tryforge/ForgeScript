import { Message } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "messageUpdate",
    async function(old, newer) {
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
    }
)