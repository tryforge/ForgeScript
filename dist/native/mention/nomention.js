"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$nomention",
    version: "1.3.0",
    description: "Disables reply ping",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.repliedUser = false;
        return this.success();
    },
});
//# sourceMappingURL=nomention.js.map