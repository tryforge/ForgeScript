import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "shardReady",
    version: "1.0.1",
    description: "Event is executed when a shard of this bot becomes ready",
    listener: function (shardId) {
        const commands = this.commands.get("shardReady")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    extras: shardId,
                    data: command.compiled.code,
                    obj: {},
                })
            }
        }
    },
})
