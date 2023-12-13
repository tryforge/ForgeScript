"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$addThreadMember",
    version: "1.0.0",
    description: "Adds a member to a thread, returns bool",
    brackets: true,
    unwrap: true,
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
    async execute(_, [, channel, member, reason]) {
        const thread = channel;
        const success = await thread.members.add(member, reason || undefined).catch(noop_1.default);
        return this.success(!!success);
    },
});
//# sourceMappingURL=addThreadMember.js.map