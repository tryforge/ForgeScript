"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$removeChannelPerms",
    version: "1.0.3",
    description: "Removes permission overwrites from a channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to remove perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased() && "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to remove these perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "perms",
            description: "The perms to remove from the id",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
            enum: discord_js_1.PermissionFlagsBits,
        },
    ],
    async execute(_, [ch, id, perms]) {
        const channel = ch;
        const obj = {};
        perms.forEach((x) => (obj[x] = false));
        return this.success(!!(await channel.permissionOverwrites.create(id, obj)));
    },
});
//# sourceMappingURL=removeChannelPerms.js.map