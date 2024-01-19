"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberSetNickname",
    version: "1.0.7",
    description: "Edits a member's nickname",
    brackets: true,
    output: structures_1.ArgType.Boolean,
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
            name: "user ID",
            description: "The member to edit its nickname",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Member,
        },
        {
            name: "nickname",
            description: "The new nickname, leave empty to reset",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [, m, nick]) {
        return this.success(!!(await m.setNickname(nick).catch(noop_1.default || null)));
    },
});
//# sourceMappingURL=memberSetNickname.js.map