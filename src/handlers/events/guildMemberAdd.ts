import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "guildMemberAdd",
    async function(m) {
        const commands = this.commands.get("guildMemberAdd")

        for (const command of commands) {
            Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    member: {
                        new: m
                    }
                },
                data: command.compiled.code,
                args: []
            })
        }
    }
)