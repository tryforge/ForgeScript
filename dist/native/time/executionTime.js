"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$executionTime",
    version: "1.0.3",
    description: "Returns current execution time",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(performance.now() - ctx.executionTimestamp);
    },
});
//# sourceMappingURL=executionTime.js.map