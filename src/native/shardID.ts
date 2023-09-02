import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$shardID",
    description: "Returns the shard id of the client",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.runtime.extras ?? ctx.client.shard?.ids.join(", "))
    }
})