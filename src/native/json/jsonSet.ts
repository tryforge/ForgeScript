import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$jsonSet",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "value",
            description: "The value to set",
            rest: false,
            required: true,
            type: ArgType.Json
        },
        {
            name: "keys",
            description: "The keys to traverse",
            type: ArgType.String,
            rest: true,
            required: true
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ value, keys ]) {
        return this.success(ctx.traverseAddEnvironmentKey(value, ...keys))
    },
})