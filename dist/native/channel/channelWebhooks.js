"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const webhook_1 = require("../../properties/webhook");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelWebhooks",
    version: "2.3.0",
    description: "Returns all webhooks of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its webhooks",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => i.isTextBased(),
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: webhook_1.WebhookProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [channel, prop, sep]) {
        const webhooks = await (channel ?? ctx.channel)?.fetchWebhooks().catch(ctx.noop);
        if (prop && webhooks)
            return this.success(webhooks.map((x) => webhook_1.WebhookProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(webhooks);
    },
});
//# sourceMappingURL=channelWebhooks.js.map