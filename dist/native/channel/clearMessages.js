"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const splitNumber_1 = __importDefault(require("../../functions/splitNumber"));
exports.default = new structures_1.NativeFunction({
    name: "$clearMessages",
    version: "1.0.0",
    description: "Clears x amount of messages from a channel, returns the number of messages deleted",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clear messages on",
            required: true,
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (x) => "messages" in x,
        },
        {
            name: "amount",
            description: "The amount of messages to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "delete pinned",
            description: "Whether to delete pinned messages",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "delete bots",
            description: "Whether to delete messages of bots",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx, [channel, amount, pinned, bots]) {
        let count = 0;
        for (const n of (0, splitNumber_1.default)(amount, 100)) {
            const messages = await channel.messages.fetch({ limit: n }).catch(ctx.noop);
            if (!messages)
                break;
            const col = await channel
                .bulkDelete(messages.filter(msg => {
                if (pinned === false && msg.pinned)
                    return false;
                if (bots === false && msg.author.bot)
                    return false;
                return true;
            }), true)
                .catch(() => null);
            if (col)
                count += col.size;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=clearMessages.js.map