"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ram",
    version: "1.0.0",
    description: "Returns the current ram usage in MB",
    unwrap: false,
    execute() {
        return this.success(process.memoryUsage().heapUsed / 1024 ** 2);
    },
});
//# sourceMappingURL=ram.js.map