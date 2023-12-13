"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiID",
    version: "1.2.0",
    description: "Returns the emoji id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji name",
            description: "The emoji name to return its id",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        if (this.hasFields)
            return this.success(ctx.client.emojis.cache.find((x) => x.name === emoji)?.id);
        return this.success(ctx.emoji?.name);
    },
});
//# sourceMappingURL=emojiID.js.map