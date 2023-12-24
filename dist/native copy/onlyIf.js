"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$onlyIf",
    version: "1.0.0",
    description: "Stop execution if condition is not matched",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "condition",
            condition: true,
            description: "The condition to use",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "code",
            description: "The code to execute if error",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        const [condition, code] = this.data.fields;
        const res = await this["resolveCondition"](ctx, condition);
        if (!this["isValidReturnType"](res) || res.value)
            return res.success ? this.success() : res;
        if (code) {
            const resolved = await this["resolveCode"](ctx, code);
            if (!this["isValidReturnType"](resolved))
                return resolved;
            ctx.container.content = resolved.value;
            await ctx.container.send(ctx.obj);
        }
        return this.stop();
    },
});
//# sourceMappingURL=onlyIf.js.map