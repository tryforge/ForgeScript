"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isBanned",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Whether this user is banned",
    args: [
        {
            name: "guild ID",
            description: "The guild to check bans on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check ban",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
    ],
    async execute(_, [guild, user]) {
        const isBanned = await guild.bans.fetch(user).catch(noop_1.default);
        return this.success(!!isBanned);
    },
});
//# sourceMappingURL=isBanned.js.map