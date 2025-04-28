import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "voiceChannelEffectSend",
    version: "2.3.0",
    description: "This event is fired when a user sends an effect in a voice channel",
    listener: async function (effect) {
        const commands = this.commands.get("voiceChannelEffectSend")

        for (const command of commands) {
            Interpreter.run({
                obj: effect,
                command,
                client: this,
                states: {
                    voiceEffect: {
                        new: effect
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
})