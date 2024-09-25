"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpPing",
    version: "1.5.0",
    description: "Returns the response time of the HTTP request",
    aliases: ["$httpResponseTime"],
    unwrap: false,
    experimental: true,
    output: NativeFunction_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.http.response?.ping?.toFixed() ?? 0);
    },
});
//# sourceMappingURL=httpPing.js.map