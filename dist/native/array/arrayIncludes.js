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
const parsePrimitive_1 = __importDefault(require("../../functions/parsePrimitive"));
exports.default = new structures_1.NativeFunction({
    name: "$arrayIncludes",
    version: "1.0.0",
    description: "Checks whether a value exists in an array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "value",
            description: "The value to check for",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [name, value]) {
        const arr = ctx.getEnvironmentKey(name);
        return this.success(Array.isArray(arr) ? arr.includes((0, parsePrimitive_1.default)(value)) : false);
    },
});
//# sourceMappingURL=arrayIncludes.js.map