"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isModal",
    version: "1.0.0",
    description: "Returns whether the context is a modal",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isModalSubmit()));
    },
});
//# sourceMappingURL=isModal.js.map