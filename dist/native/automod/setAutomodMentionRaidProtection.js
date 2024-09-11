"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodMentionRaidProtection",
    version: "1.5.0",
    description: "Sets mention raid protection for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "enabled",
            description: "Whether to enable mention raid protection",
            rest: false,
            required: true,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [enabled]) {
        ctx.automodRule.triggerMetadata ??= {};
        ctx.automodRule.triggerMetadata.mentionRaidProtectionEnabled = enabled;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodMentionRaidProtection.js.map