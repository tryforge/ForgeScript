"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const webhook_1 = require("../../properties/webhook");
exports.default = new structures_1.NativeFunction({
    name: "$guildWebhooks",
    version: "2.3.0",
    description: "Returns all webhooks of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
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
    async execute(ctx, [guild, prop, sep]) {
        const webhooks = await (guild ?? ctx.guild)?.fetchWebhooks().catch(ctx.noop);
        if (prop && webhooks)
            return this.success(webhooks.map((x) => webhook_1.WebhookProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(webhooks);
    },
});
//# sourceMappingURL=guildWebhooks.js.map