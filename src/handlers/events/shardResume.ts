import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler(
    {
        name: "shardResume",
        version: "1.0.1",
        description: "This event is fired when a shard starts resuming",
        listener: function(shardId) {
            const commands = this.commands.get("shardResume")
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