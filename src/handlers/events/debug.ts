import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "debug",
    version: "1.0.1",
    description: "This event is fired when discord.js sends out debug info",
    listener: function (debug) {
        const commands = this.commands.get("debug")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: {},
                    extras: debug,
                })
            }
        }
    },
})
