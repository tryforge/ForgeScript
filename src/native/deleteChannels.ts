import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteChannels",
    category: "unknown",
    version: "1.0.5",
    brackets: true,
    unwrap: true,
    description: "Delete given channel ids, returns the count of channels deleted",
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
    async execute(_, [channels]) {
        let count = 0
        for (let i = 0, len = channels.length; i < len; i++) {
            const ch = channels[i]
            const success = await ch.delete().catch(noop)
            if (success) count++
        }

        return this.success(count)
    },
})
