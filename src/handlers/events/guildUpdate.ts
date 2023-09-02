import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "guildUpdate",
        version: "1.0.1",
        description: "This event is fired when a guild updates their settings",
        listener: async function(old, newer) {
            const commands = this.commands.get("guildUpdate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: newer,
                    command,
                    client: this,
                    states: {
                        guild: {
                            new: newer,
                            old
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        intents: [
            "Guilds"
        ]
    }
)