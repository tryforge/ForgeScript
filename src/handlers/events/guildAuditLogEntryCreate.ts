import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"
import { InviteSystem } from "../../structures/InviteSystem"

export default new DiscordEventHandler({
    name: "guildAuditLogEntryCreate",
    version: "1.0.3",
    description: "This event is fired when a guild audit log entry is created",
    listener: async function (g, guild) {
        const commands = this.commands.get("guildAuditLogEntryCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: guild,
                command,
                client: this,
                states: {
                    audit: {
                        new: g,
                        old: g,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "GuildModeration"],
})
