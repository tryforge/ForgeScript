"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ephemeral",
    version: "1.0.0",
    description: "Marks this reply as ephemeral",
    unwrap: false,
    execute(ctx) {
        ctx.container.ephemeral = true;
        return this.success();
    },
});
//# sourceMappingURL=ephemeral.js.map