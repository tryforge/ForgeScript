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
    name: "$arrayPush",
    version: "1.0.0",
    description: "Appends an element to an array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "values",
            description: "The values to append at the end of the array",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const arr = ctx.getEnvironmentKey(name);
        if (Array.isArray(arr))
            arr.push(...values.map(parsePrimitive_1.default));
        return this.success();
    },
});
//# sourceMappingURL=arrayPush.js.map