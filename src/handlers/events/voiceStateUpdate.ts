import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "voiceStateUpdate",
        version: "1.0.1",
        description: "This event is fired when an user joins/leaves a voice channel",
        listener: async function(old, newer) {
            const commands = this.commands.get("voiceStateUpdate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: newer,
                    command,
                    client: this,
                    states: {
                        voiceState: {
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
            "GuildVoiceStates"
        ]
    }
)