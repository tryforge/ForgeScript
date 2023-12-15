import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isBanned",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Returns whether the user is banned",
    args: [
        {
            name: "guild ID",
            description: "The guild to check bans on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check ban",
            rest: false,
            type: ArgType.User,
            required: true,
        },
    ],
    async execute(_, [guild, user]) {
        const isBanned = await guild.bans.fetch(user).catch(noop)
        return this.success(!!isBanned)
    },
})
