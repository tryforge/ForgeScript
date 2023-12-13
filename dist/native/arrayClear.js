"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayClear",
    version: "1.0.0",
    description: "Clears all elements from an array",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        const arr = ctx.getEnvironmentKey(name);
        if (Array.isArray(arr)) {
            arr.length = 0;
        }
        return this.success();
    },
});
//# sourceMappingURL=arrayClear.js.map