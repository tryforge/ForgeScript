import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$shardID",
    version: "1.0.0",
    aliases: [
        "$botShardIDs",
        "$clientShardIDs"
    ],
    description: "Returns the shard id of the client",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Number,
    execute(ctx, [sep]) {
        return this.success(ctx.runtime.extras ?? ctx.client.shard?.ids.join(sep ?? ", ") ?? 0)
    },
})