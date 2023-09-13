import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler(
    {
        name: "interactionCreate",
        version: "1.0.1",
        description: "This event is fired every time a user uses a slash command, context menu, button, etc",
        listener: async function(i) {
            if (i.isCommand()) {
                const command = this.applicationCommands.get(i)
                if (command) {
                    Interpreter.run({
                        client: this,
                        command: null,
                        data: command.compiled,
                        obj: i,

                    })
                }

                return
            }

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