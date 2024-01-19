"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableEveryoneMention",
    version: "1.3.0",
    description: "Disables everyone mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.parse = ["everyone"];
        return this.success();
    },
});
//# sourceMappingURL=disableEveryoneMention.js.map