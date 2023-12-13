"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isBool",
    version: "1.0.6",
    description: "Checks whether given value is bool like",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "value",
            description: "Value to check if its valid bool",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [v]) {
        return this.success(v === "true" || v === "false");
    },
});
//# sourceMappingURL=isBool.js.map