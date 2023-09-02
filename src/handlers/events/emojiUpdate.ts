import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "emojiUpdate",
    async function(old, newer) {
        const commands = this.commands.get("emojiUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    emoji: {
                        new: newer,
                        old
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)