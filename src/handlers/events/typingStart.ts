import { User } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "typingStart",
    version: "1.4.0",
    listener: async function (typing) {
        const commands = this.commands.get("typingStart")

        for (const command of commands) {
            Interpreter.run({
                obj: typing.member ?? typing.user,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            })
        }
    },
    description: "This event is fired when a user starts typing",
    intents: ["GuildMessageTyping", "DirectMessageTyping"],
})
