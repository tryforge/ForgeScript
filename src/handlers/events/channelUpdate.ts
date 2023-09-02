import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "channelUpdate",
    async function(old, newer) {
        const commands = this.commands.get("channelUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    channel: {
                        new: newer,
                        old
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)