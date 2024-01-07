import parseJSON from "../../functions/parseJSON"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$jsonSet",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "keys;value",
            description: "The keys to traverse, with the value to use at the end",
            type: ArgType.String,
            rest: true,
            required: true
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ keys ]) {
        return this.success(ctx.traverseAddEnvironmentKey(parseJSON(keys[keys.length - 1]), ...keys.slice(0, -1)))
    },
})