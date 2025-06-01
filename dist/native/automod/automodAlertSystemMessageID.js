"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodAlertSystemMessageID",
    version: "1.2.0",
    description: "Returns the message sent by automod",
    unwrap: false,
    output: structures_1.ArgType.Message,
    execute(ctx) {
        return this.success(ctx.automod?.alertSystemMessageId);
    },
});
//# sourceMappingURL=automodAlertSystemMessageID.js.map