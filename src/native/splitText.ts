import { ArgType, NativeFunction, Return } from "../structures"
import { SplitTextName } from "./textSplit"

export default new NativeFunction({
    name: "$splitText",
    version: "1.2.0",
    description: "Gets an element of textSplit",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to get split at",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ index ]) {
        return this.success(
            ctx.getEnvironmentInstance(Array, SplitTextName)?.[index]
        )
    },
})