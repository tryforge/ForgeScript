"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelHasAnyPerms",
    version: "1.4.0",
    aliases: [
        "$channelHasAnyPerm"
    ],
    description: "Returns whether role or member has any of the perms in a channel",
    output: structures_1.ArgType.Boolean,
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
            name: "permissions",
            description: "The perms to check for",
            rest: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.PermissionFlagsBits
        }
    ],
    brackets: true,
    execute(ctx, [channel, id, perms]) {
        return this.success(channel.permissionsFor(id)?.any(perms));
    },
});
//# sourceMappingURL=channelHasAnyPerms.js.map