import { Collection } from "discord.js"
import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "messageDeleteBulk",
    version: "1.4.0",
    description: "This event is fired when a row of messages is deleted",
    listener: async function (ch, channel) {
        const commands = this.commands.get("messageDeleteBulk")
        const asArray = ch instanceof Collection ? Array.from(ch.values()) : [ ch ]

        for (const command of commands) {
            Interpreter.run({
                obj: channel,
                command,
                client: this,
                states: {
                    bulk: {
                        new: asArray
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "GuildMessages"],
})
