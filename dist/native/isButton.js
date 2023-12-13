"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isButton",
    version: "1.0.0",
    description: "Whether the interaction is a button",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isButton()));
    },
});
//# sourceMappingURL=isButton.js.map