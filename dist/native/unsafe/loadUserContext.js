"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadUserContext",
    version: "1.4.0",
    aliases: [
        "$useUserContext",
        "$asUserContext"
    ],
    brackets: true,
    description: "Loads a user instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    execute(ctx, [u]) {
        ctx.obj = u;
        return this.success();
    },
});
//# sourceMappingURL=loadUserContext.js.map