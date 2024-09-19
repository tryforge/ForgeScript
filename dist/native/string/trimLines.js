"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$trimLines",
    version: "1.5.0",
    description: "Trims empty lines from a string",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to trim empty lines",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [text]) {
        return this.success(text.split(/\n/).map(x => x.trim()).filter(x => x !== "").join("\n"));
    },
});
//# sourceMappingURL=trimLines.js.map