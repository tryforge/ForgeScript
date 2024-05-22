"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasEntitlement",
    version: "1.5.0",
    aliases: [
        "$interactionHasEntitlement"
    ],
    description: "Checks whether this interaction user has given entitlement",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlement to validate",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [name]) {
        return this.success(ctx.interaction?.entitlements.has(name));
    },
});
//# sourceMappingURL=hasEntitlement.js.map