"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$year",
    version: "1.2.0",
    description: "Returns current year",
    unwrap: true,
    execute: function () {
        return this.success(new Date().getFullYear());
    }
});
//# sourceMappingURL=year.js.map