"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiExists",
    version: "1.0.0",
    description: "Returns whether an emoji id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && ctx.client.emojis.cache.has(id));
    },
});
//# sourceMappingURL=emojiExists.js.map