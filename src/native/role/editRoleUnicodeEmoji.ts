import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editRoleUnicodeEmoji",
    version: "1.5.0",
    description: "Edits a role's unicode emoji, returns boolean",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            pointer: 0,
            type: ArgType.Role,
            description: "The role to edit unicode emoji for",
            rest: false,
            required: true,
        },
        {
            name: "emoji",
            description: "The new unicode emoji for the role",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, emoji]) {
        return this.success(!!(await role.setUnicodeEmoji(emoji).catch(ctx.noop)))
    },
})