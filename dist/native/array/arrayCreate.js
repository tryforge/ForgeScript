"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayCreate",
    version: "1.4.0",
    aliases: [
        "$arrayNew",
        "$arrayInit"
    ],
    brackets: true,
    description: "Initializes an array and loads it to a variable",
    args: [
        {
            name: "variable",
            description: "The variable to load it to, accessed with $env",
            type: structures_1.ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "length",
            description: "The default length of the array",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [v, n]) {
        ctx.setEnvironmentKey(v, new Array(n));
        return this.success();
    },
});
//# sourceMappingURL=arrayCreate.js.map