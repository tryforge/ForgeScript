"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isFloat",
    version: "1.0.0",
    description: "Returns whether the number is a float",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [n]) {
        return this.success(!!n && !isNaN(Number(n)) ? Number(n) % 1 !== 0 : false);
    },
});
//# sourceMappingURL=isFloat.js.map