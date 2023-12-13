"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pow",
    version: "1.0.0",
    description: "Exponentially multiply multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to power by",
            rest: true,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x ** y));
    },
});
//# sourceMappingURL=pow.js.map