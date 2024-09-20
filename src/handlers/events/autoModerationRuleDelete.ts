import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "autoModerationRuleDelete",
    version: "1.5.0",
    description: "This event is fired when an automod rule is deleted",
    listener: async function (r) {
        const commands = this.commands.get("autoModerationRuleDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: r,
                command,
                client: this,
                states: {
                    automodRule: {
                        new: r,
                        old: r,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "AutoModerationConfiguration"],
})