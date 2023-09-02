import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "guildMemberRemove",
        version: "1.0.1",
        description: "This event is fired when a member leaves, is kicked or banned from a guild",
        listener: async function(m) {
            const commands = this.commands.get("guildMemberRemove")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: m as GuildMember,
                    command,
                    client: this,
                    states: {
                        member: {
                            old: m as GuildMember,
                            new: m as GuildMember
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        intents: [
            "GuildMembers"
        ]
    }
)