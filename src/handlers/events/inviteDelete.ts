import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "inviteDelete",
    version: "1.0.3",
    description: "This event is fired when an invite is deleted",
    listener: async function (inv) {
        if (this.options.trackers?.invites) await InviteTracker.inviteDeleteHandler(inv)

        const commands = this.commands.get("inviteDelete")

        for (const command of commands) {
            Interpreter.run({
                obj: inv,
                command,
                client: this,
                states: {
                    invite: {
                        old: inv,
                        new: inv,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["Guilds", "GuildInvites"],
})
