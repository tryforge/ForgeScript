"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$botWebhookEvents",
    version: "2.2.0",
    description: "Returns the client webhook event types",
    aliases: ["$clientWebhookEvents"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every type",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(discord_js_1.ApplicationWebhookEventType),
    execute(ctx, [sep]) {
        return this.success(ctx.client.application.eventWebhooksTypes?.join(sep ?? ", "));
    },
});
//# sourceMappingURL=botWebhookEvents.js.map