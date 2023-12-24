"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$deleteMessage",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given message ids, returns the count of messages deleted",
    args: [
        {
            name: "channel ID",
            description: "The channel to delete this message from",
            rest: false,
            required: true,
            check: (i) => i.isTextBased(),
            type: structures_1.ArgType.Channel,
        },
        {
            name: "messages",
            description: "The messages to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
    ],
    async execute(_, [channel, messages]) {
        if (!messages.length)
            return this.success(0);
        if (messages.length === 1) {
            return this.success(
            // @ts-ignore
            !!(await messages[0].delete().catch(noop_1.default)) + false);
        }
        const col = (await channel
            .bulkDelete(messages, true)
            .then((x) => x.size)
            .catch(noop_1.default)) ?? 0;
        return this.success(col);
    },
});
//# sourceMappingURL=deleteMessage.js.map