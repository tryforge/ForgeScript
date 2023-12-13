"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$and",
    version: "1.0.0",
    description: "Validates multiple conditions",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "conditions",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
            condition: true,
            description: "The conditions that must match",
        },
    ],
    async execute(ctx) {
        for (let i = 0, len = this.data.fields.length; i < len; i++) {
            const field = this.data.fields[i];
            const resolved = await this["resolveCondition"](ctx, field);
            if (!this["isValidReturnType"](resolved))
                return resolved;
            else if (!resolved.value)
                return this.success(false);
        }
        return this.success(true);
    },
});
//# sourceMappingURL=and.js.map