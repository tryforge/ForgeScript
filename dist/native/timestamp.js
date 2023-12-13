"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$timestamp",
    version: "1.0.0",
    description: "Adds an embed timestamp",
    unwrap: true,
    args: [
        {
            name: "ms",
            description: "The timestamp time to add",
            type: structures_1.ArgType.Number,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [timestamp, index]) {
        if (!this.hasFields) {
            ctx.container.embed(0).setTimestamp();
            return this.success();
        }
        ctx.container.embed(index ?? 0).setTimestamp(timestamp ?? Date.now());
        return this.success();
    },
});
//# sourceMappingURL=timestamp.js.map