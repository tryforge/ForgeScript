"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$webhookCreate",
    version: "1.0.0",
    description: "Creates a webhook in a channel, returns the webhook id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the webhook",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => "createWebhook" in i,
        },
        {
            name: "name",
            description: "The webhook name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "url",
            description: "The avatar url",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [channel, name, url]) {
        const ch = channel;
        const web = await ch
            .createWebhook({
            name: name,
            avatar: url || undefined,
        })
            .catch(noop_1.default);
        return this.success(web ? web.id : undefined);
    },
});
//# sourceMappingURL=webhookCreate.js.map