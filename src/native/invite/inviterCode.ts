import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new NativeFunction({
    name: "$inviterCode",
    version: "1.0.3",
    description: "Returns the invite code that was used by this person",
    unwrap: true,
    output: ArgType.Invite,
    execute(ctx) {
        return this.success(InviteTracker.Inviters.get(ctx.guild?.id!)?.get(ctx.user?.id!)?.code)
    },
})
