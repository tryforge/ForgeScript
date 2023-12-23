"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$version",
    version: "1.0.0",
    description: "Returns the package version you're using",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.version);
    },
});
//# sourceMappingURL=version.js.map