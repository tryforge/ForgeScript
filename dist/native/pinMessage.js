"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$pinMessage",
    version: "1.1.0",
    description: "Pins a message in a channel, returns bool",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to pin",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message
        }
    ],
    async execute(ctx, [, m]) {
        const msg = m ?? ctx.message;
        return this.success(!!(await msg.pin().catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=pinMessage.js.map