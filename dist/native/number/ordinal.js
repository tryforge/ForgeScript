"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordinal_1 = require("../../functions/ordinal");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ordinal",
    version: "1.3.0",
    description: "Appends a suffix to the number",
    brackets: true,
    output: structures_1.ArgType.String,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to append suffix to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [n]) {
        return this.success((0, ordinal_1.ordinal)(n));
    },
});
//# sourceMappingURL=ordinal.js.map