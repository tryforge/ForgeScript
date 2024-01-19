"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotName",
    version: "1.0.0",
    description: "Sets the bot name",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientName"
    ],
    args: [
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [name]) {
        return this.success(!!(await ctx.client.user.setUsername(name).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotName.js.map