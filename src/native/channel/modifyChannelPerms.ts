import { BaseChannel, GuildTextBasedChannel, PermissionFlagsBits, TextChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import overwritePermissionsArrayToObject from "../../functions/overwritePermissionsArrayToObject"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$modifyChannelPerms",
    version: "1.4.0",
    description: "Modifies given channel perms for a role or user",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "permissionOverwrites" in i,
            description: "The channel to modify perms for"
        },
        {
            name: "roleOrUser",
            description: "The role or user to modify perms for",
            rest: false,
            required: true,
            pointer: 0,
            pointerProperty: "guild",
            type: ArgType.RoleOrUser
        },
        {
            name: "perms",
            rest: true,
            required: true,
            type: ArgType.OverwritePermission,
            description: "The permissions to allow, nullify or disallow, (+,/,-)Perm",
            enum: PermissionFlagsBits
        }
    ],
    async execute(ctx, [ channel, roleOrUser, raw ]) {
        const ch = channel as TextChannel
        const mapped = overwritePermissionsArrayToObject(raw)

        if (ch.permissionOverwrites.cache.has(roleOrUser.id)) {
            return this.success(!!(await ch.permissionOverwrites.edit(roleOrUser, mapped).catch(noop)))
        } else {
            return this.success(!!(await ch.permissionOverwrites.create(roleOrUser, mapped).catch(noop)))
        }
    },
})