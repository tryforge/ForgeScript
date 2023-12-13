"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonLoad",
    version: "1.0.0",
    description: "Loads JSON to an env variable",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to load it to",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "json",
            description: "The json data",
            type: structures_1.ArgType.Json,
            required: true,
            rest: false,
        },
    ],
    unwrap: true,
    execute(ctx, [name, json]) {
        ctx.setEnvironmentKey(name, json);
        return this.success();
    },
});
//# sourceMappingURL=jsonLoad.js.map