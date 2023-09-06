import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler(
    {
        name: "channelDelete",
        version: "1.0.1",
        description: "This event is fired when a channel is deleted",
        listener: async function(ch) {
            const commands = this.commands.get("channelDelete")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: ch,
                    command,
                    client: this,
                    states: {
                        channel: {
                            new: ch,
                            old: ch
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