import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodChannelID",
    version: "1.2.0",
    description: "Returns the channel id for automod",
    unwrap: false,
    output: ArgType.Channel,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.channelId)
    },
})