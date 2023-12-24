"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$default",
    version: "1.0.6",
    brackets: true,
    unwrap: true,
    description: "Returns right hand value if the left hand value is falsy",
    args: [
        {
            name: "left hand",
            description: "Left hand value",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "right hand",
            description: "Right hand value",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [lhs, rhs]) {
        return this.success(lhs || rhs);
    },
});
//# sourceMappingURL=default.js.map