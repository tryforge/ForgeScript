import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentioned",
    brackets: false,
    description: "Returns the mentioned users",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the user",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ i ]) {
        return Return.success(
            this.hasFields ?
                ctx.message?.mentions.users.at(i)?.id :
                ctx.message?.mentions.users.map(x => x.id).join(", ")
        )
    },
})