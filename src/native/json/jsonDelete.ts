import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$jsonDelete",
    version: "1.4.0",
    description: "Delete a key from a traversed json",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "keys",
            description: "The keys to use to traverse the object",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ keys ]) {
        return this.success(ctx.traverseDeleteEnvironmentKey(...keys))
    },
})