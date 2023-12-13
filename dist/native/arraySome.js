"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isTrue_1 = __importDefault(require("../functions/isTrue"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arraySome",
    version: "1.0.0",
    description: "Loops through every element of the array to find a match",
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
    brackets: true,
    async execute(ctx) {
        const [, code] = this.data.fields;
        const { args: { "0": name, "1": variable }, return: rt, } = await this["resolveMultipleArgs"](ctx, 0, 1);
        if (!this["isValidReturnType"](rt))
            return rt;
        const arr = ctx.getEnvironmentKey(name);
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i];
                ctx.setEnvironmentKey(variable, el);
                const rt = (await this["resolveCondition"](ctx, code));
                if (rt.return || rt.success) {
                    if (!(0, isTrue_1.default)(rt))
                        continue;
                    return this.success(true);
                }
                else if (!this["isValidReturnType"](rt))
                    return rt;
            }
        }
        return this.success(false);
    },
});
//# sourceMappingURL=arraySome.js.map