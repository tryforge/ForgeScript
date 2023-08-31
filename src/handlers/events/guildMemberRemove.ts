import { GuildMember } from "discord.js"
import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    "guildMemberRemove",
    async function(m) {
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
    }
)