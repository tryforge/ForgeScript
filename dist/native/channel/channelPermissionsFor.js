"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelPermissionsFor",
    version: "1.4.0",
    description: "Returns permissions of a role of member in a channel",
    aliases: [
        "$channelPermsFor",
        "$memberChannelPerms",
        "$roleChannelPerms"
    ],
    output: (0, array_1.default)(discord_js_1.PermissionFlagsBits),
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