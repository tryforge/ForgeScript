import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomMemberID",
    version: "1.0.3",
    description: "Returns a random member ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    execute(ctx, [g]) {
        g ??= ctx.guild!

        return this.success(g?.members.cache.randomKey())
    },
})
