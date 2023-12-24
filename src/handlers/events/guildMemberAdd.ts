import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "guildMemberAdd",
    version: "1.0.1",
    description: "This event is fired when a member joins the guild",
    listener: async function (m) {
        if (this.options.trackers?.invites) await InviteTracker.findInviter(m)

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
