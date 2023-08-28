import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "interactionCreate",
    async function(i) {
        const commands = this.commands.get("interactionCreate")

        for (const command of commands) {
            await Interpreter.run({
                obj: i,
                client: this,
                data: command.compiled.code,
                args: []
            })
        }
    }
)