"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$executionTime",
    version: "1.0.3",
    description: "Returns current execution time",
    unwrap: false,
    execute(ctx) {
        return structures_1.Return.success(Date.now() - ctx.executionTimestamp);
    }
});
//# sourceMappingURL=executionTime.js.map