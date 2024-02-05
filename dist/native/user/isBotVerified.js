"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isBotVerified",
    version: "1.0.0",
    description: "Whether the bot is verified",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "user ID",
            description: "The bot to check whether its verified",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
    ],
    brackets: false,
    execute(ctx, [user]) {
        return this.success(Boolean((user ?? ctx.user)?.flags?.has("VerifiedBot")));
    },
});
//# sourceMappingURL=isBotVerified.js.map