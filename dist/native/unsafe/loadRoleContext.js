"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadRoleContext",
    version: "1.4.0",
    aliases: [
        "$useRoleContext",
        "$asRoleContext"
    ],
    description: "Loads a role instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull role from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "role ID",
            description: "The role to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Role,
            pointer: 0
        }
    ],
    execute(ctx, [, r]) {
        ctx.obj = r;
        return this.success();
    },
});
//# sourceMappingURL=loadRoleContext.js.map