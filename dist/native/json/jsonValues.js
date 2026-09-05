"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonValues",
    version: "1.4.0",
    description: "Gets values from a JSON variable",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get values from",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    unwrap: true,
    execute(ctx, [name, sep]) {
        const json = ctx.getEnvironmentKey(name);
        if (!json)
            return this.success();
        return this.successJSON(Object.values(json).map((v) => (typeof v === "string" ? v : JSON.stringify(v))).join(sep ?? ", "));
    },
});
//# sourceMappingURL=jsonValues.js.map