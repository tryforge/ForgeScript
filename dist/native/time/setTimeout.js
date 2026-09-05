"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setTimeout",
    version: "1.0.2",
    description: "Executes code after given duration",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "time",
            description: "How long to wait for before running this code",
            rest: false,
            type: structures_1.ArgType.Time,
        },
        {
            name: "name",
            description: "The name for this timeout",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields[0];
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [time, name] = args;
        const c = ctx.clone(ctx.cloneRuntime());
        const data = setTimeout(async () => {
            await this["resolveCode"](c, code).catch(ctx.noop);
            if (name)
                ctx.client.timeouts.delete(name);
        }, time || undefined);
        if (name)
            ctx.client.timeouts.set(name, data);
        return this.success();
    },
});
//# sourceMappingURL=setTimeout.js.map