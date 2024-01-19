"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookURL",
    version: "1.0.0",
    description: "Gets webhook url with given id",
    brackets: true,
    output: structures_1.ArgType.URL,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    async execute(ctx, [id]) {
        const web = await ctx.client.fetchWebhook(id).catch(ctx.noop);
        return this.success(web ? web.url : web);
    },
});
//# sourceMappingURL=webhookURL.js.map