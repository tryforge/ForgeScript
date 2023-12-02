"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hour",
    description: "Returns current UTC hour",
    unwrap: true,
    execute: function () {
        return structures_1.Return.success(new Date().getHours());
    }
});
//# sourceMappingURL=hour.js.map