"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$day",
    description: "Returns current day",
    unwrap: true,
    execute: function () {
        return structures_1.Return.success(new Date().getDay());
    }
});
//# sourceMappingURL=day.js.map