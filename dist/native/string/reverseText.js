"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reverseText",
    version: "1.5.0",
    description: "Reverses given text",
    aliases: ["$reverse"],
    brackets: true,
    unwrap: true,
    args: [
        structures_1.Arg.requiredString()
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [txt]) {
        return this.success(txt.split("").reverse().join(""));
    },
});
//# sourceMappingURL=reverseText.js.map