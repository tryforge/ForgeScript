import { ArgType, NativeFunction, Return } from "../../structures"
import { SplitTextName } from "./textSplit"

export default new NativeFunction({
    name: "$getSplitTextLength",
    version: "1.4.0",
    description: "Gets count of elements from $textSplit",
    aliases: [
        "$getTextSplitLength"
    ],
    output: ArgType.Number,
    unwrap: true,
    execute(ctx) {
        return this.success(
            ctx.getEnvironmentInstance(Array, SplitTextName)?.length
        )
    },
})