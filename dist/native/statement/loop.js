"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loop",
    version: "1.4.0",
    description: "Executes given code for N times",
    unwrap: false,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "times",
            description: "How many times to run the code",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "code",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
            description: "The code to execute",
        },
        {
            name: "variable",
            description: "The variable to load the current iteration count for $env",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [times, varName] = args;
        const code = this.data.fields[1];
        for (let i = times === -1 ? Infinity : times; i > 0; i--) {
            if (varName)
                ctx.setEnvironmentKey(varName, i);
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
//# sourceMappingURL=loop.js.map