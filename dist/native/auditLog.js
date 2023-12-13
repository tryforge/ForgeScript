"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const audit_1 = require("../properties/audit");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$auditLog",
    version: "1.0.3",
    description: "Retrieves new data from an event whose context was audit log instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: audit_1.AuditProperty,
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
        return this.success(audit_1.AuditProperties[prop](ctx.states?.audit?.new, sep));
    },
});
//# sourceMappingURL=auditLog.js.map