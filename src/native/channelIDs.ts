import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$channelIDs",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    description: "Returns every channel id",
    args: [
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return this.success(ctx.client.channels.cache.map(x => x.id).join(sep ?? ", "))
    },
})