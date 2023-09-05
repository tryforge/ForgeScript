import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"
import { InviteSystem } from "../../structures/InviteSystem"

export default new EventHandler(
    {
        name: "guildAuditLogEntryCreate",
        version: "1.0.3",
        description: "This event is fired when a guild audit log entry is created",
        listener: async function(g) {            
            const commands = this.commands.get("guildAuditLogEntryCreate")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: null,
                    command,
                    client: this,
                    states: {
                        audit: {
                            new: g,
                            old: g
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        intents: [
            "Guilds",
            "GuildModeration"
        ]
    }
)