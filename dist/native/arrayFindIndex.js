"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isTrue_1 = __importDefault(require("../functions/isTrue"));
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
            condition: true,
            required: true,
            type: structures_1.ArgType.String,
        },
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
        const arr = ctx.getEnvironmentKey(name.value);
        const varName = variable.value;
        if (!Array.isArray(arr))
            return this.success(-1);
        for (let i = 0, len = arr.length; i < len; i++) {
            const el = arr[i];
            ctx.setEnvironmentKey(varName, el);
            const rt = (await this["resolveCondition"](ctx, code));
            if (rt.return || rt.success) {
                if (!(0, isTrue_1.default)(rt))
                    continue;
                return this.success(i);
            }
            else if (!this["isValidReturnType"](rt))
                return rt;
        }
        return this.success(-1);
    },
});
//# sourceMappingURL=arrayFindIndex.js.map