"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonSet",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The $env variable to set this value on",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "value",
            description: "The value to assign",
            type: structures_1.ArgType.Json,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [key, value]) {
        ctx.setEnvironmentKey(key, value);
        return this.success();
    },
});
//# sourceMappingURL=jsonSet.js.map