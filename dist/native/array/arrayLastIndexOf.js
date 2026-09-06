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
    name: "$arrayLastIndexOf",
    version: "1.5.0",
    description: "Gets the index of a last found element in the array",
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "value",
            description: "The exact value to get its last index",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, value]) {
        const arr = ctx.getEnvironmentKey(name);
        return this.success(Array.isArray(arr) ? arr.lastIndexOf((0, parsePrimitive_1.default)(value)) : -1);
    },
});
//# sourceMappingURL=arrayLastIndexOf.js.map