import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentionedRoles",
    brackets: false,
    description: "Returns the mentioned roles",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the role",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ i ]) {
        return Return.success(
            this.hasFields ?
                ctx.message?.mentions.roles.at(i)?.id :
                ctx.message?.mentions.roles.map(x => x.id).join(", ")
        )
    },
})