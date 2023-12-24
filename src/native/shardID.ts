import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$shardID",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the shard id of the client",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.runtime.extras ?? ctx.client.shard?.ids.join(", "))
    },
})
