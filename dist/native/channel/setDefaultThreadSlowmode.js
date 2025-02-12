"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setDefaultThreadSlowmode",
    version: "2.2.0",
    description: "Sets a forum's default slowmode for posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly()
        },
        {
            name: "seconds",
            description: "The new default slowmode",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "reason",
            description: "Reason for modifying default slowmode",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [chan, seconds, reason]) {
        return this.success(!!(await chan.setDefaultThreadRateLimitPerUser(seconds, reason || undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setDefaultThreadSlowmode.js.map