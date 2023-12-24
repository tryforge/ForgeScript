"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fromCharCode",
    version: "1.0.6",
    description: "Returns the characters from given codes",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "codes",
            description: "The codes to get its char codes",
            type: structures_1.ArgType.Number,
            rest: true,
            required: true,
        },
    ],
    execute(_, [codes]) {
        return this.success(String.fromCharCode(...codes));
    },
});
//# sourceMappingURL=fromCharCode.js.map