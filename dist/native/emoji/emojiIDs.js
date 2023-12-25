"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiIDs",
    category: "emoji",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    description: "Returns every emoji id",
    args: [
        {
            name: "separator",
            description: "The separator to use for every emoji",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [sep]) {
        return this.success(ctx.client.emojis.cache.map(x => x.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=emojiIDs.js.map