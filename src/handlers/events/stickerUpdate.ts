import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "stickerUpdate",
    version: "1.4.0",
    description: "This event is fired when an sticker is updated",
    listener: async function (old, now) {
        const commands = this.commands.get("stickerUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    sticker: {
                        old,
                        new: now,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildExpressions"],
})
