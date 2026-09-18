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
    name: "$arrayLoad",
    version: "1.0.0",
    description: "Loads an array to an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to load this array to",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for the array elements",
            rest: false,
            type: structures_1.ArgType.String,
            required: false,
        },
        {
            name: "values",
            description: "The elements of the array",
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [name, sep, values]) {
        ctx.setEnvironmentKey(name, sep === null ? [] : values.join(";").split(sep).map(parsePrimitive_1.default));
        return this.success();
    },
});
//# sourceMappingURL=arrayLoad.js.map