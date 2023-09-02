import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "guildCreate",
    async function(g) {
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
    }
)