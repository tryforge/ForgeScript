import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "channelCreate",
    async function(ch) {
        const commands = this.commands.get("channelCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    channel: {
                        new: ch
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)