"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$callLocalFunction",
    version: "2.3.0",
    description: "Calls a local function",
    aliases: ["$callFn"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The local function name",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "args",
            description: "The args to call this local function with",
            rest: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    output: NativeFunction_1.ArgType.Unknown,
    async execute(ctx, [name, args]) {
        const func = ctx.localFunctions.get(name);
        if (!func)
            return this.error(structures_1.ErrorType.UnknownXName, "local function", name);
        if (args.length < func.args.length)
            return this.error(structures_1.ErrorType.Custom, `Calling local function ${name} requires ${func.args.length} argument${func.args.length > 1 ? "s" : ""}, received ${args.length}`);
        for (let i = 0, len = func.args.length; i < len; i++) {
            ctx.setEnvironmentKey(func.args[i], args[i]);
        }
        const rt = await this["resolveCode"](ctx, func.code);
        return this.success(rt.value);
    },
});
//# sourceMappingURL=callLocalFunction.js.map