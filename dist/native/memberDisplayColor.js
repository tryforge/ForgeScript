"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberDisplayColor",
    version: "1.0.0",
    description: "Returns the display color of a member",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The user to get its color",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member;
        return this.success(member?.displayHexColor);
    },
});
//# sourceMappingURL=memberDisplayColor.js.map