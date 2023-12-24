import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "shardReconnecting",
    version: "1.0.1",
    listener: function (shardId) {
        const commands = this.commands.get("shardReconnecting")
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
    description: "This event is fired when a shard starts reconnecting",
})
