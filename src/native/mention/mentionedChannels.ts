import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$mentionedChannels",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned channels",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the channel",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "return channel",
            description: "Whether to return current channel if not found",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [i, rt]) {
        const id: string | undefined = this.hasFields
            ? ctx.message?.mentions.channels.at(i)?.id
            : ctx.message?.mentions.channels.map((x) => x.id).join(", ")

        return this.success(id ?? (rt ? ctx.channel?.id : undefined))
    },
})
