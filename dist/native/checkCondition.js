"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$checkCondition",
    version: "1.0.0",
    description: "Checks whether a condition is valid",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to use",
            rest: false,
            condition: true,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    async execute(ctx) {
        const cond = await this["resolveCondition"](ctx, this.data.fields[0]);
        if (!this["isValidReturnType"](cond))
            return cond;
        return this.success(cond.value);
    },
});
//# sourceMappingURL=checkCondition.js.map