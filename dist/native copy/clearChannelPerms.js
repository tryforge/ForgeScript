"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$clearChannelPerms",
    version: "1.0.3",
    description: "Deletes all permission overwrites for given id, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to delete perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased() && "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to delete all perms for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [ch, id]) {
        const channel = ch;
        return this.success(!!(await channel.permissionOverwrites.delete(id)));
    },
});
//# sourceMappingURL=clearChannelPerms.js.map