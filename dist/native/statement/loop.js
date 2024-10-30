"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortType = void 0;
const structures_1 = require("../../structures");
var SortType;
(function (SortType) {
    SortType[SortType["asc"] = 0] = "asc";
    SortType[SortType["desc"] = 1] = "desc";
})(SortType || (exports.SortType = SortType = {}));
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
        },
        {
            name: "direction",
            description: "The direction of the iteration count to use",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: SortType
        }
    ],
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2, 3);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [times, varName, type] = args;
        const code = this.data.fields[1];
        let condition = type || times === -1;
        for (let i = condition ? 1 : times; (type ? i <= times : i > 0) || times === -1; condition ? i++ : i--) {
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