"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isTrue_1 = __importDefault(require("../functions/isTrue"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayEvery",
    version: "1.0.0",
    description: "Loops through every element of the array with a condition that must pass every element",
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
    ],
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
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i];
                ctx.setEnvironmentKey(varName, el);
                const rt = (await this["resolveCode"](ctx, code));
                if (rt.return || rt.success) {
                    if (!(0, isTrue_1.default)(rt))
                        continue;
                    return this.success(false);
                }
                else if (!this["isValidReturnType"](rt))
                    return rt;
            }
        }
        return this.success(true);
    },
});
//# sourceMappingURL=arrayEvery.js.map