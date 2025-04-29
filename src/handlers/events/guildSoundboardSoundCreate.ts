import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildSoundboardSoundCreate",
    version: "2.4.0",
    description: "This event is fired when a soundboard sound is created",
    listener: async function (s) {
        const commands = this.commands.get("guildSoundboardSoundCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: s,
                command,
                client: this,
                states: {
                    soundboardSound: {
                        new: s,
                        old: s
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildExpressions"],
})