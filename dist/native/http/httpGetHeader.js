"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpGetHeader",
    version: "1.5.0",
    description: "Gets an HTTP header",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true,
        },
    ],
    output: NativeFunction_1.ArgType.String,
    execute(ctx, [name]) {
        return this.success(ctx.http.response?.headers?.get(name));
    },
});
//# sourceMappingURL=httpGetHeader.js.map