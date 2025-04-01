"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$duck",
    version: "2.3.0",
    description: "Returns a random duck",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        const ducks = ["🐣", "🐥", "🦆", "🐤"];
        return this.success(ducks[Math.floor(Math.random() * ducks.length)]);
    },
});
//# sourceMappingURL=duck.js.map