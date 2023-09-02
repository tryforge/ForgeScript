import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "emojiCreate",
    async function(g) {
        const commands = this.commands.get("emojiCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    emoji: {
                        new: g
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)