"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelPermissionsFor",
    description: "Returns permissions of a role of member in a channel",
    aliases: [
        "$channelPermsFor",
        "$memberChannelPerms",
        "$roleChannelPerms"
    ],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "permissionsFor" in i
        },
        {
            name: "id",
            description: "The role or user to get perms of",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [channel, id, sep]) {
        return this.success(channel.permissionsFor(id)?.toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=channelPermissionsFor.js.map