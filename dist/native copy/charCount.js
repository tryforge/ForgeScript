"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$charCount",
    version: "1.0.0",
    description: "Gets the char count of a text",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to get its length",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(_, [str]) {
        return this.success(str.length);
    },
});
//# sourceMappingURL=charCount.js.map