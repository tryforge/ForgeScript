"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$dog",
    description: "Returns a random dog",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        const dogs = ["🐶", "🐕", "🐩", "🐕‍🦺", "🦮"];
        return this.success(dogs[Math.floor(Math.random() * dogs.length)]);
    },
});
//# sourceMappingURL=dog.js.map