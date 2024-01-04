import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$timeout",
    version: "1.0.0",
    description: "Times a member out for X milliseconds",
    unwrap: true,
    output: ArgType.Number,
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
            name: "duration",
            description: "The duration to timeout for",
            rest: false,
            type: ArgType.Time,
        },
    ],
    async execute(_, [, member, ms]) {
        const timeout = await member.disableCommunicationUntil(ms ? Date.now() + ms : null).catch(noop)
        return this.success(!!timeout)
    },
})
