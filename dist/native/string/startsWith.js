"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$startsWith",
    version: "1.0.0",
    description: "Checks whether given string starts with X string",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "string",
            description: "The string to check against",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "values",
            required: true,
            description: "The values to match at the start",
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [str, values]) {
        return this.success(values.some(match => str.startsWith(match)));
    },
});
//# sourceMappingURL=startsWith.js.map