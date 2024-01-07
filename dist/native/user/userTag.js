"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userTag",
    version: "1.4.0",
    description: "Returns the user tag",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its tag",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [u]) {
        return this.success((u ?? ctx.user)?.tag);
    },
});
//# sourceMappingURL=userTag.js.map