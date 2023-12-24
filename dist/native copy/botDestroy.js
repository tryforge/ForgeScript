"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botDestroy",
    version: "1.0.0",
    description: "Destroy Client",
    unwrap: true,
    execute(ctx) {
        ctx.client.destroy();
        return this.success();
    },
});
//# sourceMappingURL=botDestroy.js.map