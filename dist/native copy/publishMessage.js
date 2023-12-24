"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$publishMessage",
    version: "1.1.0",
    description: "Crossposts a message in an announcement channel, returns bool",
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
            description: "The message to announce",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message
        }
    ],
    async execute(ctx, [, m]) {
        const msg = m ?? ctx.message;
        return this.success(!!(await msg.crosspost().catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=publishMessage.js.map