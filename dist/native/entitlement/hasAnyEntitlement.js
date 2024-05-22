"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasAnyEntitlement",
    version: "1.5.0",
    aliases: [
        "$interactionHasAnyEntitlement"
    ],
    description: "Checks whether this interaction user has any of the given entitlements",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlements to validate",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [names]) {
        return this.success(ctx.interaction?.entitlements.hasAny(...names));
    },
});
//# sourceMappingURL=hasAnyEntitlement.js.map