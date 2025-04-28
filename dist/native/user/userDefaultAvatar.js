"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userDefaultAvatar",
    version: "1.5.0",
    description: "Returns the default user avatar",
    brackets: false,
    output: structures_1.ArgType.URL,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the default avatar",
            rest: false,
            required: true,
            type: structures_1.ArgType.User,
        },
    ],
    unwrap: true,
    execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.defaultAvatarURL);
    },
});
//# sourceMappingURL=userDefaultAvatar.js.map