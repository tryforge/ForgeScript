"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteInvite",
    version: "1.0.0",
    brackets: true,
    description: "Deletes an invite, returns bool",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for deleting the invite",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [code, reason]) {
        const invite = await ctx.client.fetchInvite(code).catch(ctx.noop);
        return this.success(!!(await invite?.delete(reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteInvite.js.map