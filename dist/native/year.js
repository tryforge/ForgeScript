"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$year",
    description: "Returns current year",
    unwrap: true,
    execute: function () {
        return structures_1.Return.success(new Date().getFullYear());
    }
});
//# sourceMappingURL=year.js.map