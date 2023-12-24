"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userCreatedAt",
    version: "1.0.2",
    description: "Returns the timestamp this user created their account",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its creation date",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
    ],
    brackets: false,
    async execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.createdTimestamp);
    },
});
//# sourceMappingURL=userCreatedAt.js.map