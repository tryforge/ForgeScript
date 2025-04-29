import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "stickerCreate",
    version: "1.4.0",
    description: "This event is fired when an sticker is created",
    listener: async function (g) {
        const commands = this.commands.get("stickerCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    sticker: {
                        old: g,
                        new: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildExpressions"],
})
