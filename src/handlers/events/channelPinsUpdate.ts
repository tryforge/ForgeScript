import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "channelPinsUpdate",
    version: "1.4.0",
    description: "This event is fired when a channel's pins are updated",
    listener: async function (ch) {
        const commands = this.commands.get("channelPinsUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: ch,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds"],
})
