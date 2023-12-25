import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isMentionableSelectMenu",
    category: "interaction",
    version: "1.0.0",
    description: "Returns whether the context is a mentionable select menu",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isMentionableSelectMenu()))
    },
})
