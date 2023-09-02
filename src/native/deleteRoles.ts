import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteRoles",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given role ids, returns the count of roles deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete roles from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "roles",
            description: "The roles to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Role
        }
    ],
    async execute(ctx, [ guild, roles ]) {
        let count = 0
        for (let i = 0, len = roles.length;i < len;i++) {
            const role = roles[i]
            const success = await role.delete().catch(noop)
            if (success) count++
        }

        return Return.success(count)
    },
})