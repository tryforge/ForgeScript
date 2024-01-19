"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadMemberContext",
    version: "1.4.0",
    aliases: [
        "$useMemberContext",
        "$asMemberContext"
    ],
    description: "Loads a member instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "member ID",
            description: "The member to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
            pointer: 0
        }
    ],
    execute(ctx, [, m]) {
        ctx.obj = m;
        return this.success();
    },
});
//# sourceMappingURL=loadMemberContext.js.map