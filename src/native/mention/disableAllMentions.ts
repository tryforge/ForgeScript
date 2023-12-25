import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableAllMentions",
    category: "mention",
    version: "1.3.0",
    description: "Disables every possible mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.parse = []
        return this.success()
    },
})