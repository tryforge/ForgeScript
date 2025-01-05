import { Status } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$shardStatus",
    version: "2.1.0",
    aliases: [
        "$botShardStatus",
        "$clientShardStatus"
    ],
    description: "Returns the shard status of the client",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every status",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array(Status),
    execute(ctx, [sep]) {
        return this.success(ctx.client.ws.shards.map(shard => Status[shard.status]).join(sep ?? ", "))
    },
})