"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isContextMenu",
    version: "1.0.6",
    description: "Whether the interaction is a context menu",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.isContextCommand()));
    },
});
//# sourceMappingURL=isContextMenu.js.map