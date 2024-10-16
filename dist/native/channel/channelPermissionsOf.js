"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsStateType = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
var PermissionsStateType;
(function (PermissionsStateType) {
    PermissionsStateType["allow"] = "allow";
    PermissionsStateType["deny"] = "deny";
})(PermissionsStateType || (exports.PermissionsStateType = PermissionsStateType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$channelPermissionsOf",
    version: "1.5.0",
    description: "Returns specific permissions of a role or member in a channel",
    aliases: [
        "$channelPermsOf",
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
            check: (i) => "permissionOverwrites" in i
        },
        {
            name: "id",
            description: "The role or user to get perms of",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "state",
            description: "The state of the perms to return",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: PermissionsStateType
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [channel, id, state, sep]) {
        return this.success(channel.permissionOverwrites.cache.get(id)?.[state].toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=channelPermissionsOf.js.map