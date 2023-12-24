"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleIcon",
    version: "1.0.0",
    description: "Returns the role icon",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the role from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "role ID",
            description: "The role to use to get its icon",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Role,
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
    execute(ctx, [, role, size, ext]) {
        return this.success((role ?? ctx.role)?.iconURL({
            extension: ext || undefined,
            size: size || 2048,
        }));
    },
});
//# sourceMappingURL=roleIcon.js.map