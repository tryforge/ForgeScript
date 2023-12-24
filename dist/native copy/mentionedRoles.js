"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mentionedRoles",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned roles",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the role",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [i]) {
        return this.success(this.hasFields
            ? ctx.message?.mentions.roles.at(i)?.id
            : ctx.message?.mentions.roles.map((x) => x.id).join(", "));
    },
});
//# sourceMappingURL=mentionedRoles.js.map