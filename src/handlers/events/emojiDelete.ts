import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "emojiDelete",
    async function(g) {
        const commands = this.commands.get("emojiDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    emoji: {
                        new: g,
                        old: g
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)