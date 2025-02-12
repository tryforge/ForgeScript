"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pi",
    version: "2.2.0",
    description: "Returns the constant pi",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(Math.PI);
    },
});
//# sourceMappingURL=pi.js.map