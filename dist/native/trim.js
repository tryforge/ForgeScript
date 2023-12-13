"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$trim",
    version: "1.0.6",
    description: "Trims a string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to trim",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [m]) {
        return this.success(m.trim());
    },
});
//# sourceMappingURL=trim.js.map