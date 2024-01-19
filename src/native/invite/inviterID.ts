import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new NativeFunction({
    name: "$inviterID",
    version: "1.0.3",
    description: "Returns the user who invited this person",
    unwrap: true,
    output: ArgType.User,
    execute(ctx) {
        return this.success(InviteTracker.Inviters.get(ctx.guild?.id!)?.get(ctx.user?.id!)?.inviterId)
    },
})
