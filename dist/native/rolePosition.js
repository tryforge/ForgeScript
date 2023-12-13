"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$rolePosition",
    version: "1.0.0",
    description: "Returns the role position",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its position",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.position);
    },
});
//# sourceMappingURL=rolePosition.js.map