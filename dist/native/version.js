"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$version",
    version: "1.0.0",
    description: "Returns the package version you're using",
    unwrap: false,
    execute() {
        return this.success(require("../../package.json").version);
    },
});
//# sourceMappingURL=version.js.map