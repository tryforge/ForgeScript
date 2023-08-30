import { Message } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "messageDelete",
    async function(m) {
        const commands = this.commands.get("messageDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: m as Message,
                command,
                client: this,
                states: {
                    message: {
                        old: m as Message,
                        new: m as Message
                    }
                },
                data: command.compiled.code,
                args: m.content?.split(/ +/)
            })
        }
    }
)