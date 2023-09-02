import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "shardError",
    function(err) {
        const commands = this.commands.get("shardError")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    extras: err.message,
                    data: command.compiled.code,
                    obj: null,
                })
            }
        }
    }
)