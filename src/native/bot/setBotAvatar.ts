import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotAvatar",
    category: "bot",
    version: "1.0.0",
    description: "Sets the bot profile icon",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The icon url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [url]) {
        return this.success(!!(await ctx.client.user.setAvatar(url).catch(noop)))
    },
})
