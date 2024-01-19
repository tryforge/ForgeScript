"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$minSafeInteger",
    version: "1.0.6",
    description: "Returns the lowest safe integer",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute() {
        return this.success(Number.MIN_SAFE_INTEGER);
    },
});
//# sourceMappingURL=minSafeInteger.js.map