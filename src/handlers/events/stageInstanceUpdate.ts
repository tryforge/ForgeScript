import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "stageInstanceUpdate",
    version: "1.4.0",
    description: "This event is fired when a stage is updated",
    listener: async function (old, ch) {
        const commands = this.commands.get("stageInstanceUpdate")
        
        for (const command of commands) {
            Interpreter.run({
                obj: ch,
                command,
                client: this,
                states: {
                    stage: {
                        old,
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
