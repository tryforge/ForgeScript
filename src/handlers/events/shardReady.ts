import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "shardReady",
    function(shardId) {
        const commands = this.commands.get("shardReady")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    extras: shardId,
                    data: command.compiled.code,
                    obj: null,
                })
            }
        }
    }
)