"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forumDefaultThreadSlowmode",
    version: "2.2.0",
    description: "Returns the default slowmode for threads of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default slowmode from",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            required: true
        },
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [chan]) {
        return this.success(chan?.defaultThreadRateLimitPerUser);
    },
});
//# sourceMappingURL=forumDefaultThreadSlowmode.js.map