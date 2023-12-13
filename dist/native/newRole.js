"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_1 = require("../properties/role");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newRole",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a role instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: role_1.RoleProperty,
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
        return this.success(role_1.RoleProperties[prop](ctx.states?.role?.new, sep));
    },
});
//# sourceMappingURL=newRole.js.map