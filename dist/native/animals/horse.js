"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$horse",
    version: "2.3.0",
    description: "Returns a random horse",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        const horses = ["🐴", "🐎", "🎠", "🏇"];
        return this.success(horses[Math.floor(Math.random() * horses.length)]);
    },
});
//# sourceMappingURL=horse.js.map