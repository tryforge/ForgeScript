"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cooldown",
    version: "1.0.3",
    description: "Adds a command cooldown",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "id",
            rest: false,
            description: "The id to assign the cooldown to, can be anything",
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
    examples: [
        `$c[This is a guild based user cooldown]
$cooldown[$commandName_$guildID_$authorID;1h;You're on cooldown.]
Hello!
`,
        `$c[This is a user based cooldown]
$cooldown[$commandName_$authorID;1h;You're on cooldown.]
Hello!
`,
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
        const cooldown = ctx.client.cooldowns.getTimeLeft(idV.value);
        if (cooldown !== 0) {
            const content = await this["resolveCode"](ctx, code);
            if (!this["isValidReturnType"](content))
                return content;
            ctx.container.content = content.value;
            await ctx.container.send(ctx.obj);
            return this.stop();
        }
        ctx.client.cooldowns.add(idV.value, dur.value);
        return this.success();
    },
});
//# sourceMappingURL=cooldown.js.map