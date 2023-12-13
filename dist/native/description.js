"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$description",
    version: "1.0.0",
    description: "Adds an embed description",
    unwrap: true,
    args: [
        {
            name: "description",
            description: "The description for the embed",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [description, index]) {
        ctx.container.embed(index ?? 0).setDescription(description);
        return this.success();
    },
});
//# sourceMappingURL=description.js.map