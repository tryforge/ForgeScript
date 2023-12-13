"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpSetBody",
    version: "1.0.0",
    description: "Sets a JSON body for the request",
    args: [
        {
            name: "body",
            description: "the JSON body",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.Json,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [json]) {
        ctx.http.body = JSON.stringify(json);
        return this.success();
    },
});
//# sourceMappingURL=httpSetBody.js.map