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
    name: "$awaitModalSubmit",
    version: "1.4.0",
    description: "Awaits a modal submit, executing the code as the interaction context, returns bool depending on whether the interaction was received",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The modal's custom id to wait for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "success code",
            description: "The code to execute on success, this is called with interaction context",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: structures_1.ArgType.Time,
            description: "The max time to wait for a component"
        },
        {
            name: "filter",
            description: "The filter to run for every interaction received after this, this is called with interaction context",
            rest: false,
            required: false,
            condition: true,
            type: structures_1.ArgType.String
        },
    ],
    async execute(ctx) {
        if (!ctx.interaction || !("awaitModalSubmit" in ctx.interaction))
            return this.success(false);
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [id, time] = args;
        const int = await ctx.interaction.awaitModalSubmit({
            time,
            filter: async (i) => {
                if (i.customId !== id)
                    return false;
                if (!this.hasField(3))
                    return true;
                const res = await this["resolveCondition"](ctx.clone({ obj: i }), this.data.fields[3]).catch(ctx.noop);
                if (res?.error)
                    ctx.noop(res.value);
                if (res?.return || res?.success) {
                    return (0, isTrue_1.default)(res);
                }
                else
                    return false;
            }
        }).catch(ctx.noop);
        if (int) {
            const rt = await this["resolveCode"](ctx.clone({ obj: int }), this.data.fields[1]);
            if (!this["isValidReturnType"](rt))
                return rt;
        }
        return this.success(!!int);
    },
});
//# sourceMappingURL=awaitModalSubmit.js.map