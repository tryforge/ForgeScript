"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isNumber",
    version: "1.0.0",
    description: "Whether the number is valid",
    unwrap: true,
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
    execute(_, [n]) {
        return this.success(!!n && !isNaN(Number(n)));
    },
});
//# sourceMappingURL=isNumber.js.map