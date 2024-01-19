"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteInvite",
    version: "1.0.0",
    brackets: true,
    description: "Deletes an invite, returns the code",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: structures_1.ArgType.Invite,
        },
    ],
    async execute(ctx, [invite]) {
        return this.success(!!(await invite.delete().catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteInvite.js.map