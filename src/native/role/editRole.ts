import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"
import { ColorResolvable } from "discord.js"

export default new NativeFunction({
    name: "$editRole",
    version: "1.0.7",
    description: "Edits role data, returns boolean",
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
            description: "The role to edit data",
            rest: false,
            required: true,
        },
        {
            name: "role name",
            description: "The new role name, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "role color",
            description: "The new role color, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "role icon",
            description: "The new role icon, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted, leave empty to not modify",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "mentionable",
            description: "Whether the role can be mentioned, leave empty to not modify",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: ArgType.Permission,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, name, color, icon, hoist, mentionable, perms]) {
        return this.success(
            !!(await role
                .edit({
                    color: (color as ColorResolvable) || undefined,
                    hoist: hoist || undefined,
                    icon: icon || undefined,
                    mentionable: mentionable || undefined,
                    name: name || undefined,
                    permissions: perms || undefined,
                })
                .catch(ctx.noop))
        )
    },
})
