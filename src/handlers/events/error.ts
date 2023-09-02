import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "error",
    function(err) {
        const commands = this.commands.get("error")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: null,
                    extras: err.message
                })
            }
        }
    }
)