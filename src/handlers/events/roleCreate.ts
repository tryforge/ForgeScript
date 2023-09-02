import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "roleCreate",
        version: "1.0.1",
        listener: async function(m) {
            const commands = this.commands.get("roleCreate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: m,
                    command,
                    client: this,
                    states: {
                        role: {
                            old: m,
                            new: m
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        description: "This event is fired when a role is created",
        intents: [
            "Guilds"
        ]
    }
)