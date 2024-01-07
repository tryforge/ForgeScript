"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonDelete",
    version: "1.4.0",
    description: "Delete a key from a traversed json",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "keys",
            description: "The keys to use to traverse the object",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [keys]) {
        return this.success(ctx.traverseDeleteEnvironmentKey(...keys));
    },
});
//# sourceMappingURL=jsonDelete.js.map