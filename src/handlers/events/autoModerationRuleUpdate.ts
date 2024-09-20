import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "autoModerationRuleUpdate",
    version: "1.5.0",
    description: "This event is fired when an automod rule is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("autoModerationRuleUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    automodRule: {
                        new: newer,
                        old,
                    }
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "AutoModerationConfiguration"],
})