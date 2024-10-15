"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const permissionOverwrites_1 = require("../../properties/permissionOverwrites");
exports.default = new structures_1.NativeFunction({
    name: "$channelPermissions",
    version: "1.5.0",
    description: "Returns all permission overwrites of a channel",
    aliases: [
        "$channelPerms",
        "$channelOverwrites"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "permissionOverwrites" in i
        },
        {
            name: "property",
            description: "The property of the overwrites to return",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: permissionOverwrites_1.PermissionOverwritesProperty
        },
        {
            name: "separator",
            description: "The separator to use for every overwrite",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [ch, prop, sep]) {
        const chan = (ch ?? ctx.channel);
        return this.successJSON(chan.permissionOverwrites.cache.map(perm => permissionOverwrites_1.PermissionOverwritesProperties[prop](perm, sep)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=channelPermissions.js.map