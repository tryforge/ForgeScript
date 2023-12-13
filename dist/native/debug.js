"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$debug",
    version: "1.0.0",
    description: "Returns the debug message",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.runtime.extras);
    },
});
//# sourceMappingURL=debug.js.map