"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cloneChannel",
    version: "1.4.0",
    description: "Clones given channel",
    brackets: true,
    output: structures_1.ArgType.Channel,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clone",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => "clone" in i
        }
    ],
    async execute(ctx, [raw]) {
        return this.success((await raw.clone().catch(ctx.noop))?.id);
    },
});
//# sourceMappingURL=cloneChannel.js.map