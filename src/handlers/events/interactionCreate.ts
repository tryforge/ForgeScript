import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "interactionCreate",
        version: "1.0.1",
        description: "This event is fired every time a user uses a slash command, context menu, button, etc",
        listener: async function(i) {
            const commands = this.commands.get("interactionCreate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: i,
                    command,
                    client: this,
                    data: command.compiled.code,
                    args: []
                })
            }
        }
    }
)