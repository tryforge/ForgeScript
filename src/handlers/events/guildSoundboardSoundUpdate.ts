import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "guildSoundboardSoundUpdate",
    version: "2.4.0",
    description: "This event is fired when a soundboard sound is updated",
    listener: async function (old, newer) {
        const commands = this.commands.get("guildSoundboardSoundUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer,
                command,
                client: this,
                states: {
                    soundboardSound: {
                        old,
                        new: newer
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildExpressions"],
})