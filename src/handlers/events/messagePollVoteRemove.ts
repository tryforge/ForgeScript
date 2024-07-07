import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messagePollVoteRemove",
    version: "1.5.0",
    description: "This event is fired when a poll vote is removed",
    listener: async function (answer, userId) {
        const user = await this.users.fetch(userId)

        const commands = this.commands.get("messagePollVoteRemove")

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
