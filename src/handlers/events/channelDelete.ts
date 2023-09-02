import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "channelDelete",
    async function(ch) {
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
    }
)