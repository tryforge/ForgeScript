"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$second",
    version: "1.2.0",
    description: "Returns current UTC second",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: function () {
        return this.success(new Date().getSeconds());
    }
});
//# sourceMappingURL=second.js.map