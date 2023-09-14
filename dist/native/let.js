"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$let",
    version: "1.0.0",
    description: "Create a keyword",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true
        },
        {
            name: "value",
            description: "The key value",
            rest: true,
            required: true,
            type: NativeFunction_1.ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [name, args]) {
        ctx.setKeyword(name, args.join(";"));
        return Return_1.Return.success();
    },
});
//# sourceMappingURL=let.js.map