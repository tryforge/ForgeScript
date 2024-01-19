"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const overwritePermissionsArrayToObject_1 = __importDefault(require("../../functions/overwritePermissionsArrayToObject"));
exports.default = new structures_1.NativeFunction({
    name: "$modifyChannelPerms",
    version: "1.4.0",
    description: "Modifies given channel perms for a role or user",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "permissionOverwrites" in i,
            description: "The channel to modify perms for"
        },
        {
            name: "roleOrUser",
            description: "The role or user to modify perms for",
            rest: false,
            required: true,
            pointer: 0,
            pointerProperty: "guild",
            type: structures_1.ArgType.RoleOrUser
        },
        {
            name: "perms",
            rest: true,
            required: true,
            type: structures_1.ArgType.OverwritePermission,
            description: "The permissions to allow, nullify or disallow, (+,/,-)Perm",
            enum: discord_js_1.PermissionFlagsBits
        }
    ],
    async execute(ctx, [channel, roleOrUser, raw]) {
        const ch = channel;
        const mapped = (0, overwritePermissionsArrayToObject_1.default)(raw);
        if (ch.permissionOverwrites.cache.has(roleOrUser.id)) {
            return this.success(!!(await ch.permissionOverwrites.edit(roleOrUser, mapped).catch(ctx.noop)));
        }
        else {
            return this.success(!!(await ch.permissionOverwrites.create(roleOrUser, mapped).catch(ctx.noop)));
        }
    },
});
//# sourceMappingURL=modifyChannelPerms.js.map