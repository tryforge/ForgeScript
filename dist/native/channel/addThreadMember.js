"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addThreadMember",
    version: "1.0.0",
    description: "Adds a member to a thread, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "channel ID",
            description: "The thread to add member to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
        },
        {
            name: "reason",
            description: "The reason to add this member to thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [, channel, member, reason]) {
        const thread = channel;
        const success = await thread.members.add(member, reason || undefined).catch(ctx.noop);
        return this.success(!!success);
    },
});
//# sourceMappingURL=addThreadMember.js.map