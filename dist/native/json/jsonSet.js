"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonSet",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "value",
            description: "The value to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.Json
        },
        {
            name: "keys",
            description: "The keys to traverse",
            type: structures_1.ArgType.String,
            rest: true,
            required: true
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [value, keys]) {
        return this.success(ctx.traverseAddEnvironmentKey(value, ...keys));
    },
});
//# sourceMappingURL=jsonSet.js.map