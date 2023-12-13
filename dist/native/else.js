"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$else",
    version: "1.2.0",
    description: "Creates a else statement",
    unwrap: true,
    args: [
        {
            name: "else",
            description: "The code to run",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        }
    ],
    brackets: true,
    async execute(ctx, [arg]) {
        return this.success(arg);
    },
});
//# sourceMappingURL=else.js.map