import { Interpreter } from "../../core"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    {
        name: "shardReconnecting",
        version: "1.0.1",
        listener: function(shardId) {
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
        },
        description: "This event is fired when a shard starts reconnecting"
    }
)