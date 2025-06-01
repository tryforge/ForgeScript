"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodRuleID",
    version: "1.2.0",
    description: "Returns the rule id used by automod",
    unwrap: false,
    output: structures_1.ArgType.AutomodRule,
    execute(ctx) {
        return this.success(ctx.automod?.ruleId);
    },
});
//# sourceMappingURL=automodRuleID.js.map