"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelCooldown",
    version: "1.5.0",
    description: "Adds a cooldown binded to a channel and command",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            description: "The channel id to assign the cooldown to",
            type: structures_1.ArgType.String,
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
        const [, , code] = this.data.fields;
        const dur = await this["resolveUnhandledArg"](ctx, 1);
        if (!this["isValidReturnType"](dur))
            return dur;
        const idV = await this["resolveUnhandledArg"](ctx, 0);
        if (!this["isValidReturnType"](idV))
            return idV;
        const id = ctx.client.cooldowns.identifier(ctx.cmd.id, "channel", idV.value);
        const cooldown = ctx.client.cooldowns.getTimeLeft(id);
        if (cooldown !== 0) {
            const content = await this["resolveCode"](ctx, code);
            if (!this["isValidReturnType"](content))
                return content;
            ctx.container.content = content.value;
            await ctx.container.send(ctx.obj);
            return this.stop();
        }
        ctx.client.cooldowns.add(id, dur.value);
        return this.success();
    },
});
//# sourceMappingURL=channelCooldown.js.map