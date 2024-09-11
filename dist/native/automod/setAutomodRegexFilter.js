"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodRegexFilter",
    version: "1.5.0",
    description: "Sets regex filter for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "regexes",
            description: "The regexes to use for filtering",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [regexes]) {
        ctx.automodRule.triggerMetadata ??= {};
        ctx.automodRule.triggerMetadata.regexPatterns = regexes;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodRegexFilter.js.map