"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodMentionTotalLimit",
    version: "1.5.0",
    description: "Sets a total mention limit for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "limit",
            description: "The limit of mentions to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [limit]) {
        ctx.automodRule.triggerMetadata ??= {};
        ctx.automodRule.triggerMetadata.mentionTotalLimit = limit;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodMentionTotalLimit.js.map