"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$localFunction",
    version: "2.3.0",
    description: "Defines a new local function",
    aliases: ["$fn"],
    unwrap: false,
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
            name: "code",
            description: "The local function code",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "params",
            description: "The local function params",
            rest: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields[1];
        const name = await this["resolveUnhandledArg"](ctx, 0);
        if (!this["isValidReturnType"](name))
            return name;
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        ctx.localFunctions.set(name.value, {
            code,
            args: args[0]
        });
        return this.success();
    },
});
//# sourceMappingURL=localFunction.js.map