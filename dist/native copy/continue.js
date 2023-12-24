"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$continue",
    version: "1.0.3",
    description: "Skips executing bottom code of the loop",
    unwrap: false,
    execute() {
        return this.continue();
    },
});
//# sourceMappingURL=continue.js.map