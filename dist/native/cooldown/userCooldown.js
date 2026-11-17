"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userCooldown",
    version: "1.5.0",
    description: "Adds a cooldown binded to a user and command",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "user ID",
            rest: false,
            description: "The user to assign the cooldown to",
            type: structures_1.ArgType.User,
            required: true,
        },
        {
            name: "duration",
            description: "The duration of the cooldown",
            rest: false,
            type: structures_1.ArgType.Time,
            required: true,
        },
        {
            name: "code",
            description: "The code to execute if the cooldown is active",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    experimental: true,
    async execute(ctx) {
        const code = this.data.fields[2];
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [user, duration] = args;
        const id = ctx.client.cooldowns.identifier(ctx.cmd.id, "user", user.id);
        const cooldown = ctx.client.cooldowns.getTimeLeft(id);
        if (cooldown !== 0) {
            const content = await this["resolveCode"](ctx, code);
            if (!this["isValidReturnType"](content))
                return content;
            ctx.container.content = content.value;
            await ctx.container.send(ctx.obj);
            return this.stop();
        }
        ctx.client.cooldowns.add(id, duration);
        return this.success();
    },
});
//# sourceMappingURL=userCooldown.js.map