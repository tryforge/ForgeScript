import { BaseChannel, GuildTextBasedChannel, PermissionFlagsBits } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelPermissionsFor",
    version: "1.4.0",
    description: "Returns permissions for a role or member in a channel",
    aliases: [
        "$channelPermsFor",
        "$memberChannelPerms",
        "$roleChannelPerms"
    ],
    output: array(PermissionFlagsBits),
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "permissionsFor" in i
        },
        {
            name: "id",
            description: "The role or user to get perms for",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ channel, id, sep ]) {
        return this.success((channel as GuildTextBasedChannel).permissionsFor(id)?.toArray().join(sep ?? ", "))
    },
})