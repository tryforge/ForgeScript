"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
const undici_1 = require("undici");
const structures_1 = require("../../structures");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpRequest",
    version: "1.0.0",
    description: "Performs an http request, returns the status code",
    output: NativeFunction_1.ArgType.Number,
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
            ...ctx.http,
            method,
            body: ctx.http.body ?? ctx.http.form
        });
        const contentType = req.headers.get("content-type")?.split(";")[0];
        const overrideType = ctx.http.contentType;
        ctx.clearHttpOptions();
        if (overrideType !== undefined) {
            ctx.setEnvironmentKey(name, await req[structures_1.HTTPContentType[overrideType].toLowerCase()]());
        }
        else {
            if (contentType === "application/json") {
                ctx.setEnvironmentKey(name, await req.json());
            }
            else if (contentType?.includes("image")) {
                ctx.setEnvironmentKey(name, await req.arrayBuffer().then(x => Buffer.from(x).toString("base64")));
            }
            else {
                ctx.setEnvironmentKey(name, await req.text());
            }
        }
        return this.success(req.status);
    },
});
//# sourceMappingURL=httpRequest.js.map