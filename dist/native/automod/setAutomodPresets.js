"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodPresets",
    version: "1.5.0",
    description: "Sets preset keyword wordsets for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "presets",
            description: "The preset keyword types to set",
            rest: true,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationRuleKeywordPresetType
        },
    ],
    execute(ctx, [presets]) {
        ctx.automodRule.triggerMetadata ??= {};
        ctx.automodRule.triggerMetadata.presets = presets;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodPresets.js.map