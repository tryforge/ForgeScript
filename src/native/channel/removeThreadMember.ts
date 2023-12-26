import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$removeThreadMember",
    version: "1.0.0",
    description: "Removes a thread member",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "channel ID",
            description: "The thread to remove member from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to remove",
            rest: false,
            required: true,
            type: ArgType.Member,
        },
        {
            name: "reason",
            description: "The reason to remove this member from thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [, channel, member, reason]) {
        const thread = channel as ThreadChannel

        const success = await thread.members.remove(member.id, reason || undefined).catch(noop)

        return this.success(!!success)
    },
})
