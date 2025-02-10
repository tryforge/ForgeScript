import { BaseChannel, SortOrderType, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forumDefaultSortOrder",
    version: "2.2.0",
    description: "Returns the default sort order of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default sort order from",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            required: true
        },
    ],
    output: SortOrderType,
    execute(ctx, [chan]) {
        return this.success(SortOrderType[(chan as ThreadOnlyChannel)?.defaultSortOrder!])
    },
})