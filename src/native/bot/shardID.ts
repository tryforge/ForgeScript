import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$shardID",
    version: "1.0.0",
    aliases: [
        "$botShardIDs",
        "$clientShardIDs"
    ],
    description: "Returns the shard id of the client",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.runtime.extras ?? ctx.client.shard?.ids.join(", "))
    },
})
