"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookExists",
    version: "1.0.0",
    description: "Checks whether given webhook id eixsts",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
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
        return this.success((await ctx.client.fetchWebhook(id).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=webhookExists.js.map