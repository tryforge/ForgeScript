"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableRoleMentions",
    version: "1.3.0",
    description: "Only parses these roles for mentions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to retrieve roles from"
        },
        {
            name: "roles",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Role,
            description: "The roles to parse mentions for"
        }
    ],
    execute(ctx, [, roles]) {
        ctx.container.allowedMentions.roles = roles.map(x => x.id);
        return this.success();
    },
});
//# sourceMappingURL=enableRoleMentions.js.map