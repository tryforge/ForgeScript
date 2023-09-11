import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deleteActionRow",
    version: "1.0.0",
    description: "Deletes an action row at given index",
    brackets: true,
    args: [
        {
            name: "index",
            description: "The row index to delete",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ index ]) {
        ctx.container.components.splice(index , 1)
        return Return.success()
    },
})