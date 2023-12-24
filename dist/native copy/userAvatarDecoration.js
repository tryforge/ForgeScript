"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userAvatarDecoration",
    version: "1.0.0",
    description: "Returns the user decoration",
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the decoration",
            rest: false,
            required: true,
            type: structures_1.ArgType.User,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [user, size, ext]) {
        return this.success((user ?? ctx.user)?.avatarDecorationURL({
            extension: ext || undefined,
            size: size || 2048,
        }));
    },
});
//# sourceMappingURL=userAvatarDecoration.js.map