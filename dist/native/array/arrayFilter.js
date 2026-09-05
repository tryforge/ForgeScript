"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const isTrue_1 = __importDefault(require("../../functions/isTrue"));
exports.default = new structures_1.NativeFunction({
    name: "$arrayFilter",
    version: "2.7.0",
    description: "Filters through every element of the array and loads the results to another array",
    unwrap: false,
    brackets: true,
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
            condition: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "other variable",
            description: "The other variable to load the result to, leave empty to return output",
            rest: false,
            required: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Json,
    async execute(ctx) {
        const code = this.data.fields[2];
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [name, varName, otherVarName] = args;
        const arr = ctx.getEnvironmentKey(name);
        const newArr = new Array();
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i];
                ctx.setEnvironmentKey(varName, el);
                const rt = await this["resolveCondition"](ctx, code);
                if (rt.return || rt.success) {
                    if (!(0, isTrue_1.default)(rt))
                        continue;
                    newArr.push(el);
                }
                else if (!this["isValidReturnType"](rt))
                    return rt;
            }
        }
        return otherVarName ?
            this.success(void ctx.setEnvironmentKey(otherVarName, newArr)) :
            this.successJSON(newArr);
    },
});
//# sourceMappingURL=arrayFilter.js.map