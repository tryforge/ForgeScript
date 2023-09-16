import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentioned",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned users",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the user",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "return author",
            description: "Return author ID if not found",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [i, rt]) {
        const id: string | undefined = this.hasFields
            ? ctx.message?.mentions.users.at(i)?.id
            : ctx.message?.mentions.users.map((x) => x.id).join(", ")
        return Return.success(id ?? (rt ? ctx.user?.id : undefined))
    },
})
