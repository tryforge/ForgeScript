import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler(
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