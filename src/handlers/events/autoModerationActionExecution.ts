import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "autoModerationActionExecution",
    version: "1.2.0",
    listener: async function (m) {
        const commands = this.commands.get("autoModerationActionExecution")

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
    description: "This event is fired when a automod is fired under a message",
    intents: ["Guilds", "AutoModerationExecution"],
})
