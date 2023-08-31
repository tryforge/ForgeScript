import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "roleDelete",
    async function(old) {
        const commands = this.commands.get("roleDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: old,
                command,
                client: this,
                states: {
                    role: {
                        old,
                        new: old
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)