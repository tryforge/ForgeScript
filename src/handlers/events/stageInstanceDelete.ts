import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "stageInstanceDelete",
    version: "1.4.0",
    description: "This event is fired when a stage is deleted",
    listener: async function (ch) {
        const commands = this.commands.get("stageInstanceDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    stage: {
                        new: ch,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds"],
})
