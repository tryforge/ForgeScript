"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpSetContentType",
    version: "1.4.0",
    description: "Forces the http request to be decoded using given content type",
    args: [
        {
            name: "type",
            description: "The content type of the result",
            required: true,
            type: NativeFunction_1.ArgType.Enum,
            enum: structures_1.HTTPContentType,
            rest: false
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [type]) {
        ctx.http.contentType = type;
        return this.success();
    },
});
//# sourceMappingURL=httpSetContentType.js.map