import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteSystem } from "../../structures/extras/InviteSystem"

export default new DiscordEventHandler({
    name: "guildDelete",
    version: "1.0.1",
    description: "This event is fired when a guild is deleted",
    intents: ["Guilds"],
    listener: async function (g) {
        if (this.options.useInviteSystem) InviteSystem.uncache(g)

        const commands = this.commands.get("guildDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: g,
                command,
                client: this,
                states: {
                    guild: {
                        new: g,
                        old: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
})
