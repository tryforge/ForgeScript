"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$webhookToken",
    version: "1.0.0",
    description: "Gets webhook token of given id",
    brackets: true,
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
        const web = await ctx.client.fetchWebhook(id).catch(noop_1.default);
        return this.success(web ? web.token : web);
    },
});
//# sourceMappingURL=webhookToken.js.map