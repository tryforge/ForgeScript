"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$startsWith",
    version: "1.0.0",
    description: "Checks whether given string starts with X string",
    unwrap: true,
    args: [
        {
            name: "str",
            description: "The string to check against",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "value",
            required: true,
            description: "The value to match at the start",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(_, [str, match]) {
        return this.success(str.startsWith(match));
    },
});
//# sourceMappingURL=startsWith.js.map