"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayLoad",
    version: "1.0.0",
    description: "Loads an array to an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to load this array to",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for the array elements",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "values",
            description: "The elements of the array",
            required: true,
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [name, sep, values]) {
        ctx.setEnvironmentKey(name, values.join(";").split(sep));
        return this.success();
    },
});
//# sourceMappingURL=arrayLoad.js.map