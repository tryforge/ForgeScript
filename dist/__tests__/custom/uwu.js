"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/NativeFunction");
const Return_1 = require("../../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$uwu",
    description: "A uwu function",
    unwrap: true,
    execute(ctx) {
        return Return_1.Return.success("uwu!");
    }
});
//# sourceMappingURL=uwu.js.map