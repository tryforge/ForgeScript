"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$timeout",
    version: "1.0.0",
    description: "Times a member out for X milliseconds",
    unwrap: true,
    aliases: [
        "$memberTimeout"
    ],
    output: structures_1.ArgType.Number,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to timeout",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
            pointer: 0,
        },
        {
            name: "duration",
            description: "The duration to timeout for",
            rest: false,
            type: structures_1.ArgType.Time,
        },
    ],
    async execute(ctx, [, member, ms]) {
        const timeout = await member.disableCommunicationUntil(ms ? Date.now() + ms : null).catch(ctx.noop);
        return this.success(!!timeout);
    },
});
//# sourceMappingURL=timeout.js.map