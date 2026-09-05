"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isTrue_1 = __importDefault(require("../../functions/isTrue"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayFind",
    version: "2.7.0",
    description: "Finds the value of a first found element in the array",
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
            condition: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    async execute(ctx) {
        const code = this.data.fields[2];
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [name, varName] = args;
        const arr = ctx.getEnvironmentKey(name);
        if (!Array.isArray(arr))
            return this.success();
        for (let i = 0, len = arr.length; i < len; i++) {
            const el = arr[i];
            ctx.setEnvironmentKey(varName, el);
            const rt = await this["resolveCondition"](ctx, code);
            if (rt.return || rt.success) {
                if (!(0, isTrue_1.default)(rt))
                    continue;
                return this.successJSON(el);
            }
            else if (!this["isValidReturnType"](rt))
                return rt;
        }
        return this.success();
    },
});
//# sourceMappingURL=arrayFind.js.map