"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$timeout",
    version: "1.0.0",
    description: "Times a member out for X milliseconds",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "user ID",
            description: "The member to timeout",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
            pointer: 0
        },
        {
            name: "ms",
            description: "The ms to timeout for",
            rest: false,
            type: structures_1.ArgType.Number
        }
    ],
    async execute(ctx, [guild, member, ms]) {
        const timeout = await member.disableCommunicationUntil(ms ? Date.now() + ms : null).catch(noop_1.default);
        return structures_1.Return.success(!!timeout);
    },
});
//# sourceMappingURL=timeout.js.map