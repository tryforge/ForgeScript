"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addRole",
    version: "1.0.0",
    description: "Adds a role to a guild, returns role id if success",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Role,
    args: [
        {
            name: "guild ID",
            description: "The guild to add the role to",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "name",
            description: "The role name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "color",
            description: "The role color",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "icon",
            description: "The role icon",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted",
            type: structures_1.ArgType.Boolean,
            rest: false,
        },
        {
            name: "mentionable",
            description: "Whether the role is mentionable",
            type: structures_1.ArgType.Boolean,
            rest: false,
        },
        {
            name: "position",
            description: "The position for this role",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "perms",
            description: "The role perms",
            rest: true,
            enum: discord_js_1.PermissionFlagsBits,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [guild, name, color, icon, hoist, mentionable, pos, perms]) {
        const created = await guild.roles
            .create({
            color: color || undefined,
            icon: icon || undefined,
            hoist: hoist || false,
            mentionable: mentionable || false,
            name,
            permissions: perms || [],
            position: pos || undefined,
        })
            .catch(ctx.noop);
        return this.success(created ? created.id : undefined);
    },
});
//# sourceMappingURL=addRole.js.map