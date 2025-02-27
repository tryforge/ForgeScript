import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteChannels",
    version: "1.0.5",
    description: "Deletes given channels, returns the count of channels deleted",
    aliases: ["$deleteChannel"],
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "channels",
            description: "The channels to delete",
            rest: true,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "delete" in i,
        },
    ],
    async execute(ctx, [channels]) {
        let count = 0
        for (let i = 0, len = channels.length; i < len; i++) {
            const ch = channels[i]
            const success = await ch.delete().catch(ctx.noop)
            if (success) count++
        }

        return this.success(count)
    },
})
