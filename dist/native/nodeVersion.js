"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$nodeVersion",
    version: "1.0.0",
    description: "Returns the node version",
    unwrap: false,
    execute(ctx) {
        // eslint-disable-next-line no-undef
        return this.success(process.version);
    },
});
//# sourceMappingURL=nodeVersion.js.map