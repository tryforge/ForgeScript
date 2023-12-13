"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteActionRow",
    version: "1.0.0",
    description: "Deletes an action row at given index",
    brackets: true,
    args: [
        {
            name: "index",
            description: "The row index to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    unwrap: true,
    execute(ctx, [index]) {
        ctx.container.components.splice(index, 1);
        return this.success();
    },
});
//# sourceMappingURL=deleteActionRow.js.map