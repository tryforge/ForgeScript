import { NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$disableUserMentions",
    category: "unknown",
    version: "1.3.0",
    description: "Disables all user mentions",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.users = []
        return this.success()
    },
})