import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "voiceStateUpdate",
    async function(old, newer) {
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
    }
)