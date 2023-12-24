"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userGlobalName",
    version: "1.0.0",
    description: "Returns the global name of a user",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its global name",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
    ],
    brackets: false,
    async execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.globalName);
    },
});
//# sourceMappingURL=userGlobalName.js.map