"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reverseText",
    version: "1.5.0",
    aliases: ["$reverse"],
    brackets: true,
    unwrap: true,
    description: "Reverses given text",
    args: [
        structures_1.Arg.requiredString()
    ],
    execute(ctx, [txt]) {
        return this.success(txt.split("").reverse().join(""));
    },
});
//# sourceMappingURL=reverseText.js.map