import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchMembers",
    version: "1.0.0",
    description: "Caches all members of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache members of",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    async execute(ctx, [guild]) {
        guild ??= ctx.guild!
        await guild?.members.fetch()
        return this.success()
    },
})
