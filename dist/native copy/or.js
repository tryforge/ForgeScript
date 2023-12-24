"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$or",
    version: "1.0.0",
    description: "Validates one condition",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "conditions",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
            condition: true,
            description: "The conditions that must match one",
        },
    ],
    async execute(ctx) {
        for (let i = 0, len = this.data.fields.length; i < len; i++) {
            const field = this.data.fields[i];
            const resolved = await this["resolveCondition"](ctx, field);
            if (!this["isValidReturnType"](resolved))
                return resolved;
            else if (resolved.value)
                return this.success(true);
        }
        return this.success(false);
    },
});
//# sourceMappingURL=or.js.map