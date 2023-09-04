import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"
import { InviteSystem } from "../../structures/InviteSystem"

export default new EventHandler(
    {
        name: "inviteDelete",
        version: "1.0.3",
        description: "This event is fired when a invite is deleted",
        listener: async function(inv) {
            if (this.options.useInviteSystem)
                await InviteSystem.inviteDeleteHandler(inv)

            const commands = this.commands.get("inviteDelete")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: inv,
                    command,
                    client: this,
                    states: {
                        invite: {
                            old: inv,
                            new: inv
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        intents: [
            "Guilds",
            "GuildInvites"
        ]
    }
)