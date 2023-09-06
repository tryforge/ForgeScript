import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler(
    {
        name: "roleUpdate",
        version: "1.0.1",
        description: "This event is fired when a role is updated",
        listener: async function(old, newer) {
            const commands = this.commands.get("roleUpdate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: newer,
                    command,
                    client: this,
                    states: {
                        role: {
                            old,
                            new: newer
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