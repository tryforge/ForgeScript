import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$addThreadMember",
    version: "1.0.0",
    description: "Adds a member to a thread, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "channel ID",
            description: "The thread to add member to",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread()
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to add",
            rest: false,
            required: true,
            type: ArgType.Member
        },
        {
            name: "reason",
            description: "The reason to add this member to thread",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, channel, member, reason ]) {
        const thread = channel as ThreadChannel

        const success = await thread.members.add(member, reason || undefined).catch(noop)

        return Return.success(
            !!success
        )
    },
})