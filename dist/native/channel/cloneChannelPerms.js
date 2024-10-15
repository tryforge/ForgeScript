"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cloneChannelPerms",
    version: "1.5.0",
    description: "Clones the given channel's perms to another channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clone its perms",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => "permissionOverwrites" in i,
        },
        {
            name: "channel ID",
            description: "The other channel to set new perms for",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => "permissionOverwrites" in i,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [chan1, chan2]) {
        return this.success(!!(await chan2.permissionOverwrites.set(chan1.permissionOverwrites.cache).catch(ctx.noop)));
    },
});
//# sourceMappingURL=cloneChannelPerms.js.map