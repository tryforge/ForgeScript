import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"
import { InviteSystem } from "../../structures/InviteSystem"

export default new DiscordEventHandler({
    name: "guildMemberAdd",
    version: "1.0.1",
    description: "This event is fired when a member joins the guild",
    listener: async function (m) {
        if (this.options.useInviteSystem) await InviteSystem.findInviter(m)

        const commands = this.commands.get("guildMemberAdd")

        for (const command of commands) {
            Interpreter.run({
                obj: m,
                command,
                client: this,
                states: {
                    member: {
                        new: m,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildMembers"],
})
