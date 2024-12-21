"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isBoolean",
    version: "1.0.6",
    description: "Checks whether given value is bool like",
    aliases: ["$isBool"],
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "value",
            description: "Value to check if its a valid bool",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [v]) {
        return this.success(v === "true" || v === "false");
    },
});
//# sourceMappingURL=isBoolean.js.map