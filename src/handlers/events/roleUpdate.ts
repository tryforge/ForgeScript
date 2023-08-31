import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "roleUpdate",
    async function(old, newer) {
        const commands = this.commands.get("roleUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    role: {
                        old,
                        new: newer
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)