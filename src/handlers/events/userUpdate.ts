import { User } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "userUpdate",
    async function(old, newer) {
        const commands = this.commands.get("userUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    user: {
                        new: newer,
                        old: old as User
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)