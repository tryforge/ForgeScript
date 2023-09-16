import { NativeFunction, Return } from "../structures"
import { InviteSystem } from "../structures/InviteSystem"

export default new NativeFunction({
    name: "$inviterCode",
    version: "1.0.3",
    description: "Returns the invite code that was used by this person",
    unwrap: true,
    execute(ctx) {
        return Return.success(InviteSystem.Inviters.get(ctx.guild?.id!)?.get(ctx.user?.id!)?.code)
    },
})
