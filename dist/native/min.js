"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$min",
    version: "1.0.7",
    description: "Returns the smallest number of the ones given",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the smallest",
            rest: true,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(Math.min(...numbers));
    },
});
//# sourceMappingURL=min.js.map