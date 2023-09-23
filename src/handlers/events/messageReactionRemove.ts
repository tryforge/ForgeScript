import { MessageReaction, User } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageReactionRemove",
    version: "1.0.1",
    description: "This event is fired when a user stops reacting",
    intents: ["GuildMessageReactions", "DirectMessageReactions"],
    listener: async function (m, user) {
        const commands = this.commands.get("messageReactionRemove")

        for (const command of commands) {
            Interpreter.run({
                obj: m as MessageReaction,
                command,
                client: this,
                states: {
                    user: {
                        new: user as User,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
})
