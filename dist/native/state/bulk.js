"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bulk_1 = require("../../properties/bulk");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bulk",
    version: "1.4.0",
    description: "Retrieves data from an event whose context was bulk delete event",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: bulk_1.BulkProperty,
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
        return this.success(bulk_1.BulkProperties[prop](ctx.states?.bulk?.new, sep));
    },
});
//# sourceMappingURL=bulk.js.map