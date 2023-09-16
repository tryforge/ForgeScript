import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$timeout",
    version: "1.0.0",
    description: "Times a member out for X milliseconds",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to timeout",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0,
        },
        {
            name: "ms",
            description: "The ms to timeout for",
            rest: false,
            type: ArgType.Number,
        },
    ],
    async execute(ctx, [guild, member, ms]) {
        const timeout = await member.disableCommunicationUntil(ms ? Date.now() + ms : null).catch(noop)
        return Return.success(!!timeout)
    },
})
