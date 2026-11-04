"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$try",
    version: "1.0.0",
    experimental: true,
    description: "Handles a possible error from given code",
    unwrap: false,
    args: [
        {
            name: "code",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
            description: "The code to safely execute",
        },
        {
            name: "catch code",
            description: "The code to run in case of an error",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "variable",
            description: "Variable to load the error message to",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const [tryCode, catchCode, varName] = this.data.fields;
        const tryExecution = await this["resolveCode"](ctx, tryCode).catch((e) => {
            if (!(e instanceof Error))
                throw e;
            return this.error(e);
        });
        if (tryExecution.error) {
            const value = tryExecution.value;
            const name = await this["resolveCode"](ctx, varName);
            if (!this["isValidReturnType"](name))
                return name;
            if (name.value)
                ctx.setEnvironmentKey(name.value, value.message);
            return this["resolveCode"](ctx, catchCode);
        }
        if (!this["isValidReturnType"](tryExecution))
            return tryExecution;
        return this.success(tryExecution.value);
    },
});
//# sourceMappingURL=try.js.map