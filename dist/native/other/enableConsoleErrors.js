"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableConsoleErrors",
    version: "1.4.0",
    description: "Enables possible outcoming errors that are output to console",
    unwrap: false,
    execute(ctx) {
        ctx.runtime.disableConsoleErrors = false;
        return this.success();
    },
});
//# sourceMappingURL=enableConsoleErrors.js.map