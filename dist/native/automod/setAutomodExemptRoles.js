"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodExemptRoles",
    version: "1.5.0",
    description: "Sets exempt roles for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "roles",
            description: "The roles that should not be affected by the automod rule",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [roles]) {
        ctx.automodRule.exemptRoles = roles;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodExemptRoles.js.map