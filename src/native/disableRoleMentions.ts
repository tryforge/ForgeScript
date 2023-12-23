import { NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$disableRoleMentions",
    version: "1.3.0",
    description: "Disables all role mentions",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.roles = []
        return this.success()
    },
})