"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayUnload",
    version: "1.0.0",
    description: "Unloads an array from an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to unload this array from",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [name]) {
        ctx.deleteEnvironmentKey(name);
        return this.success();
    },
});
//# sourceMappingURL=arrayUnload.js.map