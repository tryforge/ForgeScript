import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "shardReconnecting",
    function(shardId) {
        const commands = this.commands.get("shardReconnecting")
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