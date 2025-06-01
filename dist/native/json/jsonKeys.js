"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonKeys",
    version: "1.4.0",
    description: "Gets keys from a json var",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get keys from",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.Json,
    unwrap: true,
    execute(ctx, [name]) {
        const json = ctx.getEnvironmentKey(name);
        if (!json)
            return this.success();
        return this.successJSON(Object.keys(json));
    },
});
//# sourceMappingURL=jsonKeys.js.map