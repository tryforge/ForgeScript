"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookToken",
    version: "1.0.0",
    description: "Gets webhook token of given id",
    brackets: true,
    output: structures_1.ArgType.String,
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
        return this.success(web ? web.token : web);
    },
});
//# sourceMappingURL=webhookToken.js.map