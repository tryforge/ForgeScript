"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpAddHeader",
    version: "1.0.0",
    description: "Adds an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: NativeFunction_1.ArgType.String,
            required: true,
        },
        {
            name: "value",
            description: "The header value",
            rest: true,
            type: NativeFunction_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const value = values.join(";");
        if (!ctx.http.headers)
            ctx.http.headers = {};
        ctx.http.headers[name] = value;
        return this.success();
    },
});
//# sourceMappingURL=httpAddHeader.js.map