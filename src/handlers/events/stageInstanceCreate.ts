import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "stageInstanceCreate",
    version: "1.4.0",
    description: "This event is fired when a stage is created",
    listener: async function (ch) {
        const commands = this.commands.get("stageInstanceCreate")

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
