"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entitlement_1 = require("../../properties/entitlement");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$oldEntitlement",
    version: "1.5.0",
    description: "Retrieves old data from an event whose context was an entitlement instance",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: entitlement_1.EntitlementProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(entitlement_1.EntitlementProperties[prop](ctx.states?.entitlement?.old, sep));
    },
});
//# sourceMappingURL=oldEntitlement.js.map