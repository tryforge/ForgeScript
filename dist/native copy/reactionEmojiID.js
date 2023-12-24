"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionEmojiID",
    version: "1.0.0",
    description: "The reaction id that was used",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.id);
    },
});
//# sourceMappingURL=reactionEmojiID.js.map