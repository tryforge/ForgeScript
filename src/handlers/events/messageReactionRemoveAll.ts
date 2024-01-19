import { MessageReaction, User } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageReactionRemoveAll",
    version: "1.4.0",
    description: "This event is fired when all emojis are removed from a message's reactions",
    intents: ["GuildMessageReactions", "DirectMessageReactions"],
    listener: async function (m) {
        const commands = this.commands.get("messageReactionRemoveAll")

        for (const command of commands) {
            Interpreter.run({
                obj: m,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            })
        }
    },
})
