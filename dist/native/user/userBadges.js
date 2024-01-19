"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userBadges",
    version: "1.0.0",
    description: "Returns the public badges of a user",
    unwrap: true,
    output: (0, array_1.default)(discord_js_1.UserFlags),
    args: [
        {
            name: "user ID",
            description: "The user to return its badges",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
        {
            name: "separator",
            description: "The separator to use for every badge",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: false,
    async execute(ctx, [user, sep]) {
        const flags = await (user ?? ctx.user).fetchFlags().catch(ctx.noop);
        return this.success(flags ? flags.toArray().join(sep || ", ") : undefined);
    },
});
//# sourceMappingURL=userBadges.js.map