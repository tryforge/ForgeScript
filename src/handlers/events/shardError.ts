import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    {
        name: "shardError",
        version: "1.0.1",
        description: "This event is fired when a shard throws an error",
        listener: function(err) {
            const commands = this.commands.get("shardError")
            if (commands.length) {
                for (const command of commands) {
                    Interpreter.run({
                        client: this,
                        command,
                        extras: err.message,
                        data: command.compiled.code,
                        obj: null,
                    })
                }
            }
        }
    }
)