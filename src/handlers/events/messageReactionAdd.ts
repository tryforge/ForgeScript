import { MessageReaction, User } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "messageReactionAdd",
        version: "1.0.1",
        description: "This event is fired when a reaction is added",
        listener: async function(m, user) {
            const commands = this.commands.get("messageReactionAdd")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: m as MessageReaction,
                    command,
                    client: this,
                    states: {
                        user: {
                            new: user as User
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        intents: [
            "GuildMessageReactions",
            "DirectMessageReactions"
        ]
    }
)