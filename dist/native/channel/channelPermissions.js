"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const permissionOverwrites_1 = require("../../properties/permissionOverwrites");
const array_1 = __importDefault(require("../../functions/array"));
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
    output: (0, array_1.default)(),
    execute(ctx, [ch, prop, sep]) {
        const chan = (ch ?? ctx.channel);
        return this.successJSON(chan.permissionOverwrites.cache.map(perm => permissionOverwrites_1.PermissionOverwritesProperties[prop](perm, sep)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=channelPermissions.js.map