import { NativeFunction, Return } from "../structures"
import { InviteSystem } from "../structures/extras/InviteSystem"

export default new NativeFunction({
    name: "$inviterID",
    version: "1.0.3",
    description: "Returns the user who invited this person",
    unwrap: true,
    execute(ctx) {
        return this.success(InviteSystem.Inviters.get(ctx.guild?.id!)?.get(ctx.user?.id!)?.inviterId)
    },
})
