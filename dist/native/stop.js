"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stop",
    version: "1.0.0",
    description: "Stops code execution",
    unwrap: false,
    execute() {
        return this.stop();
    },
});
//# sourceMappingURL=stop.js.map