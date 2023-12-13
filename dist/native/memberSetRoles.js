"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberSetRoles",
    version: "1.0.0",
    description: "Sets roles to a member and returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to set roles to",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "roles",
            description: "The roles to set",
            rest: true,
            type: structures_1.ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(ctx, [, member, roles]) {
        member ??= ctx.member;
        const d = await member.roles.set(roles).catch(noop_1.default);
        return this.success(!!d);
    },
});
//# sourceMappingURL=memberSetRoles.js.map