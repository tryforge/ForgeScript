"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const undici_1 = require("undici");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpRequest",
    version: "1.0.0",
    description: "Performs an http request, returns the status code",
    args: [
        {
            name: "url",
            description: "The url to perform this request to",
            type: NativeFunction_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "method",
            description: "The method to use",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "variable",
            description: "Environment variable name to load the response to",
            rest: false,
            required: false,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    brackets: true,
    unwrap: true,
    async execute(ctx, [url, method, name]) {
        name ??= "result";
        const req = await (0, undici_1.fetch)(url, {
            method,
            ...ctx.http,
        });
        ctx.clearHttpOptions();
        const contentType = req.headers.get("content-type")?.split(";")[0];
        if (contentType === "application/json") {
            ctx.setEnvironmentKey(name, await req.json());
        }
        else
            ctx.setEnvironmentKey(name, await req.text());
        return this.success(req.status);
    },
});
//# sourceMappingURL=httpRequest.js.map