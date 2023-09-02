import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    {
        name: "shardDisconnect",
        version: "1.0.1",
        description: "This event is fired when a shard is disconnected",
        listener: function(event, shardId) {
            const commands = this.commands.get("shardDisconnect")
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
    }
)