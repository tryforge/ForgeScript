"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$monkey",
    description: "Returns a random monkey",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        const monkeys = ["🦍", "🦧", "🙈", "🙊", "🙉", "🐒", "🐵"];
        return this.success(monkeys[Math.floor(Math.random() * monkeys.length)]);
    },
});
//# sourceMappingURL=monkey.js.map