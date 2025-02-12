"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether the given user can be DMed",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "user",
            description: "The user to test DMs",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user;
        try {
            await user.send("");
            return this.success(true);
        }
        catch (error) {
            if (error instanceof discord_js_1.DiscordAPIError) {
                if (error.code === 50007)
                    return this.success(false); // DM disabled
                if (error.code === 50006)
                    return this.success(true); // Empty message (aka DM enabled)
            }
            throw error;
        }
    },
});
//# sourceMappingURL=isUserDMEnabled.js.map