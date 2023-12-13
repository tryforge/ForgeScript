"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$checkContains",
    version: "1.0.0",
    description: "Checks whether a string contains a set of other trings",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to check on",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "matches",
            description: "The list of strings to try match",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(_, [text, matches]) {
        return this.success(matches.some((x) => text.includes(x)));
    },
});
//# sourceMappingURL=checkContains.js.map