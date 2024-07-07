import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messagePollVoteAdd",
    version: "1.5.0",
    description: "This event is fired when a poll vote is added",
    listener: async function (answer, userId) {
        const user = await this.users.fetch(userId)

        const commands = this.commands.get("messagePollVoteAdd")

        for (const command of commands) {
            Interpreter.run({
                obj: user,
                command,
                client: this,
                states: {
                    poll: {
                        new: answer,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "GuildMessagePolls", "DirectMessagePolls"],
})
