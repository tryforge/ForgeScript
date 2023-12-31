"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$messageContent",
    description: "Retrieves the content of the message",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.content);
    },
});
//# sourceMappingURL=messageContent.js.map