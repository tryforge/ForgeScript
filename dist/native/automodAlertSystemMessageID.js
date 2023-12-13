"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodAlertSystemMessageID",
    version: "1.2.0",
    description: "The message sent by automod",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.alertSystemMessageId);
    },
});
//# sourceMappingURL=automodAlertSystemMessageID.js.map