"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const MathRegex = /[^0-9%\-+./*\t\n\s()<>]/;
exports.default = new structures_1.NativeFunction({
    name: "$math",
    version: "1.0.0",
    description: "Run math expression, returns nothing if incorrect expression",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "expr",
            description: "The expression",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(_, [expr]) {
        try {
            if (MathRegex.test(expr))
                return this.success();
            return this.success(eval(expr));
        }
        catch (error) {
            return this.success();
        }
    },
});
//# sourceMappingURL=math.js.map