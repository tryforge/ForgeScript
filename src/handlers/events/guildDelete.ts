import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "guildDelete",
        version: "1.0.1",
        description: "This event is fired when a guild is deleted",
        intents: [
            "Guilds"
        ],
        listener: async function(g) {
            const commands = this.commands.get("guildDelete")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: g,
                    command,
                    client: this,
                    states: {
                        guild: {
                            new: g,
                            old: g
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        }
    }
)