"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const splitNumber_1 = __importDefault(require("../functions/splitNumber"));
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$clearMessages",
    version: "1.0.0",
    description: "Clears x amount of messages from a channel, returns the number of messages deleted",
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
            name: "amount",
            description: "The amount of messages to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    async execute(_, [channel, amount]) {
        let count = 0;
        for (const n of (0, splitNumber_1.default)(amount, 100)) {
            const col = await channel.bulkDelete(n, true).catch(noop_1.default);
            if (!col || !col.size)
                break;
            count += col.size;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=clearMessages.js.map