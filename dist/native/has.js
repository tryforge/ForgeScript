"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$has",
    version: "1.0.0",
    description: "Checks whether a keyword exists",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the keyword",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [name]) {
        return this.success(ctx.hasKeyword(name));
    },
});
//# sourceMappingURL=has.js.map