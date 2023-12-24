"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionEmoji",
    version: "1.0.0",
    description: "The emoji that was used",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.toString());
    },
});
//# sourceMappingURL=reactionEmoji.js.map