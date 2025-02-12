import { MessageReaction, User } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageReactionRemoveEmoji",
    version: "1.4.0",
    description: "This event is fired when an emoji is removed from a message's reactions",
    intents: ["GuildMessageReactions", "DirectMessageReactions"],
    listener: async function (m) {
        const commands = this.commands.get("messageReactionRemoveEmoji")

        for (const command of commands) {
            Interpreter.run({
                obj: m as MessageReaction,
                command,
                client: this,
                data: command.compiled.code,
                args: [],
            })
        }
    },
})
