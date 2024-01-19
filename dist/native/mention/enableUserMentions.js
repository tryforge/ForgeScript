"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableUserMentions",
    version: "1.3.0",
    description: "Only parses these users for mentions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "users",
            rest: true,
            required: true,
            type: structures_1.ArgType.User,
            description: "The users to parse mentions for"
        }
    ],
    execute(ctx, [users]) {
        ctx.container.allowedMentions.users = users.map(x => x.id);
        return this.success();
    },
});
//# sourceMappingURL=enableUserMentions.js.map