"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodRuleID",
    version: "1.2.0",
    description: "The rule id used by automod",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.ruleId);
    },
});
//# sourceMappingURL=automodRuleID.js.map