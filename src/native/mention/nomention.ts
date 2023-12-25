import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$nomention",
    category: "mention",
    version: "1.3.0",
    description: "Disables reply ping",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.repliedUser = false
        return this.success()
    },
})