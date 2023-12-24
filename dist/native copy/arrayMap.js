"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayMap",
    version: "1.0.0",
    description: "Maps through every element of the array and loads the results to another array",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "other variable",
            description: "The other variable to load the result to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const [nameField, varField, code, otherVarField] = this.data.fields;
        const name = await this["resolveCode"](ctx, nameField);
        if (!this["isValidReturnType"](name))
            return name;
        const variable = await this["resolveCode"](ctx, varField);
        if (!this["isValidReturnType"](variable))
            return variable;
        const otherVariable = await this["resolveCode"](ctx, otherVarField);
        if (!this["isValidReturnType"](otherVariable))
            return variable;
        const arr = ctx.getEnvironmentKey(name.value);
        const varName = variable.value;
        const otherVarName = otherVariable.value;
        const newArr = new Array();
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i];
                ctx.setEnvironmentKey(varName, el);
                const rt = (await this["resolveCode"](ctx, code));
                if (rt.return) {
                    newArr.push(rt.value);
                }
                else if (!this["isValidReturnType"](rt))
                    return rt;
            }
        }
        ctx.setEnvironmentKey(otherVarName, newArr);
        return this.success();
    },
});
//# sourceMappingURL=arrayMap.js.map