"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
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
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [name, params] = args;
        ctx.setLocalFunction(name, {
            code,
            args: params
        });
        return this.success();
    },
});
//# sourceMappingURL=localFunction.js.map