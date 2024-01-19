"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$case",
    version: "1.0.3",
    description: "Adds a switch case",
    brackets: true,
    experimental: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "value",
            description: "The match case",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "code",
            description: "Code to execute if it matches this case",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [, code]) {
        return this.success(code);
    },
});
//# sourceMappingURL=case.js.map