"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$minute",
    version: "1.2.0",
    description: "Returns current UTC minute",
    unwrap: true,
    execute: function () {
        return this.success(new Date().getMinutes());
    }
});
//# sourceMappingURL=minute.js.map