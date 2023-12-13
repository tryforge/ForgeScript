"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$while",
    version: "1.0.3",
    description: "Executes code while a condition is true",
    unwrap: false,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "condition",
            condition: true,
            description: "The condition to validate",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "code",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
            description: "The code to execute",
        },
    ],
    async execute(ctx) {
        const condition = this.data.fields[0];
        const code = this.data.fields[1];
        for (;;) {
            const cond = await this["resolveCondition"](ctx, condition);
            if (!this["isValidReturnType"](cond))
                return cond;
            else if (!cond.value)
                break;
            const exec = await this["resolveCode"](ctx, code);
            if (exec.success || exec.continue)
                continue;
            else if (exec.break)
                break;
            else
                return exec;
        }
        return this.success();
    },
});
//# sourceMappingURL=while.js.map