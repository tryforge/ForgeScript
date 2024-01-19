"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$removeThreadMember",
    version: "1.0.0",
    description: "Removes a thread member",
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
            description: "The thread to remove member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to remove",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
        },
        {
            name: "reason",
            description: "The reason to remove this member from thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [, channel, member, reason]) {
        const thread = channel;
        const success = await thread.members.remove(member.id, reason || undefined).catch(ctx.noop);
        return this.success(!!success);
    },
});
//# sourceMappingURL=removeThreadMember.js.map