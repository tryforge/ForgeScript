import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteSystem } from "../../structures/extras/InviteSystem"

export default new DiscordEventHandler({
    name: "inviteCreate",
    version: "1.0.3",
    description: "This event is fired when an invite is created",
    listener: async function (inv) {
        if (this.options.useInviteSystem) await InviteSystem.inviteCreateHandler(inv)

        if (this.options.useInviteSystem) await InviteSystem.inviteDeleteHandler(inv)

        const commands = this.commands.get("inviteCreate")

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
