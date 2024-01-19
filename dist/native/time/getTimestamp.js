"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getTimestamp",
    version: "1.0.0",
    description: "Gets the current timestamp",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute() {
        return this.success(Date.now());
    },
});
//# sourceMappingURL=getTimestamp.js.map