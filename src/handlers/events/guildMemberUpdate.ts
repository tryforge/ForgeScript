import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "guildMemberUpdate",
    async function(old, newer) {
        const commands = this.commands.get("guildMemberUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: newer as GuildMember,
                command,
                states: {
                    member: {
                        old: old as GuildMember,
                        new: newer as GuildMember
                    }
                },
                client: this,
                data: command.compiled.code,
                args: []
            })
        }
    }
)