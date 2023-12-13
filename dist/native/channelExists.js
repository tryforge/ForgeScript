"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelExists",
    version: "1.0.0",
    description: "Returns whether an channel id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && ctx.client.channels.cache.has(id));
    },
});
//# sourceMappingURL=channelExists.js.map