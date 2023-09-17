import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$archiveThread",
    version: "1.0.0",
    description: "Archives a thread, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to archive",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to archive this thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [channel, reason]) {
        const thread = channel as ThreadChannel

        const success = await thread.setArchived(true, reason || undefined).catch(noop)

        return Return.success(!!success)
    },
})
