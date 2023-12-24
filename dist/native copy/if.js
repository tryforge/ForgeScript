"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$if",
    version: "1.0.0",
    description: "Creates an if statement",
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to check against",
            rest: false,
            type: structures_1.ArgType.String,
            condition: true,
        },
        {
            name: "if true",
            description: "The code to run if true",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "if false",
            description: "The code to run if false",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const condition = await this["resolveCondition"](ctx, this.data.fields[0]);
        if (!this["isValidReturnType"](condition))
            return condition;
        const fieldToRun = (condition.value ? this.data.fields[1] : this.data.fields[2]);
        if (!fieldToRun)
            return this.success();
        return this["resolveCode"](ctx, fieldToRun);
    },
});
//# sourceMappingURL=if.js.map