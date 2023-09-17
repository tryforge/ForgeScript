import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$kickMember",
    version: "1.0.0",
    description:
        "Kicks a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to kick a member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to kick",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to kick for",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [, member, reason]) {
        return Return.success((await member.kick(reason || undefined).catch(() => false)) !== false)
    },
})
