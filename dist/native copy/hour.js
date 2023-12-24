"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hour",
    version: "1.2.0",
    description: "Returns current UTC hour",
    unwrap: true,
    execute: function () {
        return this.success(new Date().getHours());
    }
});
//# sourceMappingURL=hour.js.map