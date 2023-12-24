"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodRuleTriggerType",
    version: "1.2.0",
    description: "The rule trigger type used by automod",
    unwrap: false,
    execute(ctx) {
        const trigger = ctx.automod?.ruleTriggerType;
        return this.success(trigger ? discord_js_1.AutoModerationRuleTriggerType[trigger] : null);
    },
});
//# sourceMappingURL=automodRuleTriggerType.js.map