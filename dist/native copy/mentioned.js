"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mentioned",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned users",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the user",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
        {
            name: "return author",
            description: "Return author ID if not found",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [i, rt]) {
        const id = this.hasFields
            ? ctx.message?.mentions.users.at(i)?.id
            : ctx.message?.mentions.users.map((x) => x.id).join(", ");
        return this.success(id ?? (rt ? ctx.user?.id : undefined));
    },
});
//# sourceMappingURL=mentioned.js.map