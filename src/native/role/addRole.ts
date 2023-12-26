import { ColorResolvable, PermissionFlagsBits, PermissionsString } from "discord.js"
import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addRole",
    version: "1.0.0",
    description: "Adds a role to a guild, returns role id if success",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add the role to",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "name",
            description: "The role name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "color",
            description: "The role color",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "icon",
            description: "The role icon",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted",
            type: ArgType.Boolean,
            rest: false,
        },
        {
            name: "mentionable",
            description: "Whether the role is mentionable",
            type: ArgType.Boolean,
            rest: false,
        },
        {
            name: "position",
            description: "The position for this role",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "perms",
            description: "The role perms",
            rest: true,
            enum: PermissionFlagsBits,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, name, color, icon, hoist, mentionable, pos, perms]) {
        const created = await guild.roles
            .create({
                color: (color as ColorResolvable) || undefined,
                icon: icon || undefined,
                hoist: hoist || false,
                mentionable: mentionable || false,
                name,
                permissions: (perms as PermissionsString[]) || [],
                position: pos || undefined,
            })
            .catch(noop)
        return this.success(created ? created.id : undefined)
    },
})
