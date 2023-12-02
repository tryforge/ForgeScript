"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$second",
    description: "Returns current UTC second",
    unwrap: true,
    execute: function () {
        return structures_1.Return.success(new Date().getSeconds());
    }
});
//# sourceMappingURL=second.js.map