"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether given user can be DMed",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user",
            description: "The user to test dms",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user;
        // Only way to know is to send an empty message
        const dm = await user?.send("").catch(err => err);
        return this.success(
        // If any of these is not met, cant be dmed
        // 50007 = Cannot send message to this user
        !!dm && dm instanceof discord_js_1.DiscordAPIError && dm.status !== 50007);
    },
});
//# sourceMappingURL=isUserDMEnabled.js.map