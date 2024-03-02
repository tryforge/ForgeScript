"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayShuffle",
    version: "1.4.0",
    description: "Shuffles given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        }
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable);
        if (arr !== null)
            ctx.setEnvironmentKey(variable, arr.sort(x => 0.5 - Math.random()));
        return this.success();
    },
});
//# sourceMappingURL=arrayShuffle.js.map