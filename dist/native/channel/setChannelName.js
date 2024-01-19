"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setChannelName",
    version: "1.0.0",
    description: "Sets a channel name, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its name",
            rest: false,
            check: (i) => "setName" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "name",
            description: "The name to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [channel, name]) {
        return this.success(!!(await channel.setName(name).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setChannelName.js.map