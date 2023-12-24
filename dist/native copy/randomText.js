"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomText",
    version: "1.0.0",
    description: "Returns a random text (no cache)",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "texts",
            description: "The texts to use",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [texts]) {
        const rnd = texts[Math.floor(Math.random() * texts.length)];
        return this.success(rnd);
    },
});
//# sourceMappingURL=randomText.js.map