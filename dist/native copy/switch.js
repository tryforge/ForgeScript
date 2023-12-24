"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const case_1 = __importDefault(require("./case"));
exports.default = new structures_1.NativeFunction({
    name: "$switch",
    version: "1.0.3",
    description: "Switch-case statement for javascript",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "value",
            description: "The value to match with",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "cases",
            rest: false,
            description: "The cases to use ($case), use $case[default;...] to add a default case",
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const match = await this["resolveCode"](ctx, this.data.fields[0]);
        if (!this["isValidReturnType"](match))
            return match;
        const value = match.value;
        const switchCases = this.data.fields[1].functions.filter((x) => x.data.name === case_1.default.name);
        const index = switchCases.findIndex((x) => x.data.fields[0].value === "default");
        const defaultCase = index === -1 ? null : switchCases.splice(index, 1)[0];
        for (let i = 0, len = switchCases.length; i < len; i++) {
            const cas = switchCases[i];
            const caseValue = await cas["resolveCode"](ctx, cas.data.fields[0]);
            if (!this["isValidReturnType"](caseValue))
                return caseValue;
            if (caseValue.value === value) {
                return cas.execute(ctx);
            }
        }
        if (defaultCase)
            return defaultCase.execute(ctx);
        return this.success();
    },
});
//# sourceMappingURL=switch.js.map