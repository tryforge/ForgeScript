import { NativeFunction, Return } from "../../structures"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new NativeFunction({
    name: "$inviterID",
    category: "invite",
    version: "1.0.3",
    description: "Returns the user who invited this person",
    unwrap: true,
    execute(ctx) {
        return this.success(InviteTracker.Inviters.get(ctx.guild?.id!)?.get(ctx.user?.id!)?.inviterId)
    },
})
