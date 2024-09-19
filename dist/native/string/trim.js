"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$trim",
    version: "1.0.6",
    aliases: ["$trimSpace"],
    description: "Trims a string",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to trim",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [m]) {
        return this.success(m.trim());
    },
});
//# sourceMappingURL=trim.js.map