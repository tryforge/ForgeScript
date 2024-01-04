import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID",
    unwrap: false,
    output: ArgType.Channel,
    execute(ctx) {
        return this.success(ctx.client.channels.cache.randomKey())
    },
})
