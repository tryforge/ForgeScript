"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelHasPerms",
    version: "1.4.0",
    description: "Returns whether role or member has perms in a channel",
    output: structures_1.ArgType.Boolean,
    aliases: [
        "$hasChannelPerm"
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
            name: "permissions",
            description: "The perms to check for",
            rest: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.PermissionFlagsBits
        }
    ],
    brackets: true,
    execute(ctx, [channel, id, perms]) {
        return this.success(channel.permissionsFor(id)?.has(perms));
    },
});
//# sourceMappingURL=channelHasPerms.js.map