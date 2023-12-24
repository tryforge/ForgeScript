"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$async",
    version: "1.0.0",
    description: "Runs code asynchronously, will not return any value",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    experimental: true,
    execute(ctx) {
        void this["resolveArgs"](ctx);
        return this.success();
    },
});
//# sourceMappingURL=async.js.map