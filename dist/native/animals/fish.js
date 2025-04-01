"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fish",
    version: "2.3.0",
    description: "Returns a random fish",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        const fishes = ["🐠", "🐟", "🎣", "🐡", "🍣", "🍤"];
        return this.success(fishes[Math.floor(Math.random() * fishes.length)]);
    },
});
//# sourceMappingURL=fish.js.map