import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"
import { InviteSystem } from "../../structures/InviteSystem"

export default new EventHandler(
    {
        name: "inviteCreate",
        version: "1.0.3",
        description: "This event is fired when a invite is created",
        listener: async function(inv) {
            if (this.options.useInviteSystem)
                await InviteSystem.inviteCreateHandler(inv)
        },
        intents: [
            "Guilds",
            "GuildInvites"
        ]
    }
)