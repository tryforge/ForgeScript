import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableEveryoneMention",
    category: "mention",
    version: "1.3.0",
    description: "Disables everyone mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.parse = ["everyone"]

        return this.success()
    },
})