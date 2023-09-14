"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$get",
    version: "1.0.0",
    description: "Get a keyword value",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [name]) {
        return Return_1.Return.success(ctx.getKeyword(name));
    },
});
//# sourceMappingURL=get.js.map