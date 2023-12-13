"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayConcat",
    version: "1.0.0",
    description: "Concat arrays and load them into another variable",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable to load the result to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "variables",
            description: "The variable names to concat",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, variables]) {
        const arr = new Array();
        for (let i = 0, len = variables.length; i < len; i++) {
            const v = variables[i];
            const load = ctx.getEnvironmentKey(v);
            if (Array.isArray(load))
                arr.push(...load);
        }
        ctx.setEnvironmentKey(name, arr);
        return this.success();
    },
});
//# sourceMappingURL=arrayConcat.js.map