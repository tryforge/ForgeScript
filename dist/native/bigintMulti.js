"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bigintMulti",
    version: "1.3.0",
    description: "Multiplies multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to multiply",
            rest: true,
            type: structures_1.ArgType.BigInt,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(numbers.reduce((x, y) => x * y));
    },
});
//# sourceMappingURL=bigintMulti.js.map