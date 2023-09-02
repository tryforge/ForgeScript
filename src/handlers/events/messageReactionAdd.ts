import { MessageReaction, User } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "messageReactionAdd",
    async function(m, user) {
        const commands = this.commands.get("messageReactionAdd")

        for (const command of commands) {
            Interpreter.run({
                obj: m as MessageReaction,
                command,
                client: this,
                states: {
                    user: {
                        new: user as User
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)