"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$inviteExists",
    version: "1.0.0",
    description: "Returns whether an invite code exists",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "code",
            description: "The invite to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(!!(await ctx.client.fetchInvite(id).catch(ctx.noop)));
    },
});
//# sourceMappingURL=inviteExists.js.map