"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodKeywordFilter",
    version: "1.5.0",
    description: "Sets disallowed words for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "words",
            description: "The words to disallow and blacklist",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [words]) {
        ctx.automodRule.triggerMetadata ??= {};
        ctx.automodRule.triggerMetadata.keywordFilter = words;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodKeywordFilter.js.map