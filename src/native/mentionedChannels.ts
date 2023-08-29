import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentionedChannels",
    brackets: false,
    description: "Returns the mentioned channels",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the channel",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ i ]) {
        return Return.success(
            this.hasFields ?
                ctx.message?.mentions.channels.at(i)?.id :
                ctx.message?.mentions.channels.map(x => x.id).join(", ")
        )
    },
})