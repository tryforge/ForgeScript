"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$encodeURI",
    version: "1.0.0",
    description: "Encodes text for a url",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to encode",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [text]) {
        return this.success(encodeURI(text));
    },
});
//# sourceMappingURL=encodeURI.js.map