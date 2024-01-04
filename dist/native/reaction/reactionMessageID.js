"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionMessageID",
    version: "1.0.0",
    description: "The message id of the reacted message",
    unwrap: true,
    output: structures_1.ArgType.Message,
    execute(ctx) {
        return this.success(ctx.reaction?.message.id);
    },
});
//# sourceMappingURL=reactionMessageID.js.map