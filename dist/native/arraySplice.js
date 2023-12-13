"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arraySplice",
    version: "1.0.0",
    description: "Removes x elements starting from y index",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "index",
            description: "The start index",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "delete count",
            description: "The number of items to delete",
            required: true,
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "elements",
            description: "The elements to insert in the deleted indexes",
            required: true,
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, index, count, elements]) {
        const arr = ctx.getEnvironmentKey(name);
        if (Array.isArray(arr)) {
            arr.splice(index, count, ...elements);
        }
        return this.success();
    },
});
//# sourceMappingURL=arraySplice.js.map