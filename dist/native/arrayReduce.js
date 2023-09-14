"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayReduce",
    version: "1.0.0",
    description: "Reduces an array of elements and returns the result",
    unwrap: false,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "other variable",
            description: "The other variable to load the second element to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "code",
            description: "The code to execute for every element, must return a number",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "default value",
            description: "The default value, defaults to 0",
            rest: false,
            type: structures_1.ArgType.Number
        }
    ],
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const [nameField, varField, otherVarField, code, defaultValue] = this.data.fields;
        const name = await this["resolveCode"](ctx, nameField);
        if (!this["isValidReturnType"](name))
            return name;
        const variable = await this["resolveCode"](ctx, varField);
        if (!this["isValidReturnType"](variable))
            return variable;
        const otherVariable = await this["resolveCode"](ctx, otherVarField);
        if (!this["isValidReturnType"](otherVariable))
            return variable;
        const defValue = await this["resolveCode"](ctx, defaultValue);
        if (!this["isValidReturnType"](defValue))
            return variable;
        const arr = ctx.getEnvironmentKey([name.value]);
        const varName = variable.value;
        const otherVarName = otherVariable.value;
        ctx.setEnvironmentKey(varName, defValue.value);
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i];
                ctx.setEnvironmentKey(otherVarName, el);
                const rt = await this["resolveCode"](ctx, code);
                if (rt.return) {
                    ctx.setEnvironmentKey(varName, rt.value);
                }
                else if (!this["isValidReturnType"](rt))
                    return rt;
            }
        }
        return structures_1.Return.success(ctx.getEnvironmentKey([varName]));
    },
});
//# sourceMappingURL=arrayReduce.js.map