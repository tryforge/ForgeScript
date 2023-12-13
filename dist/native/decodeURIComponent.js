"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$decodeURIComponent",
    version: "1.0.0",
    description: "Decodes text from a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to decode",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [text]) {
        return this.success(decodeURIComponent(text));
    },
});
//# sourceMappingURL=decodeURIComponent.js.map