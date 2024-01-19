"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotAvatar",
    version: "1.0.0",
    description: "Sets the bot profile icon",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientAvatar"
    ],
    args: [
        {
            name: "url",
            description: "The icon url",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [url]) {
        return this.success(!!(await ctx.client.user.setAvatar(url).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotAvatar.js.map