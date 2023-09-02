import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$getThreadMembers",
    description: "Gets thread members",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to pull members from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread()
        },
        {
            name: "separator",
            description: "The separator for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, sep ]) {
        const thread = channel as ThreadChannel

        const success = await thread.members.fetch().catch(noop)

        return Return.success(
            success && success.size ? success.map(x => x.id).join(sep || ", ") : undefined
        )
    },
})