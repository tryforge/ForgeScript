"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cat",
    description: "Returns a random cat",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        const cats = ["🐱", "😻", "😹", "🙀", "😿", "😽", "😺", "😸", "😾", "😼", "🐈", "🐈‍⬛"];
        return this.success(cats[Math.floor(Math.random() * cats.length)]);
    },
});
//# sourceMappingURL=cat.js.map