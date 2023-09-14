"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$return",
    version: "1.0.0",
    description: "Returns a value",
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The value to return",
            rest: true,
            required: true,
            type: NativeFunction_1.ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [args]) {
        return Return_1.Return.return(args.join(";"));
    },
});
//# sourceMappingURL=return.js.map