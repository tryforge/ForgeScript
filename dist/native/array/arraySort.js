"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arraySort",
    version: "1.2.0",
    description: "Sorts given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [variable, other]) {
        const arr = ctx.getEnvironmentInstance(Array, variable);
        if (arr !== null) {
            if (other)
                return this.success(ctx.setEnvironmentKey(other, arr.sort()));
            else
                return this.successJSON(arr.sort());
        }
        return this.success();
    },
});
//# sourceMappingURL=arraySort.js.map