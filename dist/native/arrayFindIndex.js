"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayFindIndex",
    version: "1.0.0",
    description: "Finds the index of an element in the array",
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
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const [nameField, varField, code] = this.data.fields;
        const name = await this["resolveCode"](ctx, nameField);
        if (!this["isValidReturnType"](name))
            return name;
        const variable = await this["resolveCode"](ctx, varField);
        if (!this["isValidReturnType"](variable))
            return variable;
        const arr = ctx.getEnvironmentKey([name.value]);
        const varName = variable.value;
        if (!Array.isArray(arr))
            return structures_1.Return.success(-1);
        for (let i = 0, len = arr.length; i < len; i++) {
            const el = arr[i];
            ctx.setEnvironmentKey(varName, el);
            const rt = await this["resolveCode"](ctx, code);
            if (rt.return) {
                console.log(rt.value);
                if (!rt.value)
                    continue;
                return structures_1.Return.success(i);
            }
            else if (!this["isValidReturnType"](rt))
                return rt;
        }
        return structures_1.Return.success(-1);
    },
});
//# sourceMappingURL=arrayFindIndex.js.map