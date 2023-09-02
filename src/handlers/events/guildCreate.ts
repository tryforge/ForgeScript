import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "guildCreate",
        version: "1.0.1",
        description: "This event is fired when the bot is added to a guild",
        listener: async function(g) {
            const commands = this.commands.get("guildCreate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: g,
                    command,
                    client: this,
                    states: {
                        guild: {
                            new: g
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