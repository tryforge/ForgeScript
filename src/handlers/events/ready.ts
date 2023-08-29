import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "ready",
    function() {
        console.log(`Ready on client ${this.user.displayName}`)

        const commands = this.commands.get("ready")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: null,
                })
            }
        }
    }
)