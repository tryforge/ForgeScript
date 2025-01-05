import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$shardCount",
    version: "2.1.0",
    aliases: [
        "$botShardCount",
        "$clientShardCount"
    ],
    description: "Returns the shard count of the client",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.shard?.count ?? 1)
    },
})