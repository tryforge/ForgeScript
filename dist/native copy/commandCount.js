"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$commandCount",
    version: "1.0.0",
    description: "Returns the command count",
    brackets: false,
    args: [
        {
            name: "categories",
            rest: true,
            required: true,
            description: "The event types to filter by",
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [categories]) {
        return this.success(this.hasFields
            ? ctx.client.commands["commands"]
                .filter((_, key) => categories.includes(key))
                .reduce((x, y) => x + y.length, 0)
            : ctx.client.commands["commands"].reduce((x, y) => x + y.length, 0));
    },
});
//# sourceMappingURL=commandCount.js.map