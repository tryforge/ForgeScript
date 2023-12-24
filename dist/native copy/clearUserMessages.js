"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const splitNumber_1 = __importDefault(require("../functions/splitNumber"));
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$clearUserMessages",
    version: "1.0.0",
    description: "Clears x amount of messages from a channel of given user, returns the number of messages deleted",
    unwrap: true,
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
            name: "user ID",
            description: "The user to delete their messages",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
        {
            name: "amount",
            description: "The amount of messages to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    async execute(_, [channel, user, amount]) {
        let count = 0;
        for (const n of (0, splitNumber_1.default)(amount, 100)) {
            const messages = await channel.messages.fetch({ limit: n }).catch(noop_1.default);
            if (!messages)
                break;
            const col = await channel
                .bulkDelete(messages.filter((x) => x.author.id === user.id), true)
                .catch(noop_1.default);
            if (!col)
                break;
            count += col.size;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=clearUserMessages.js.map