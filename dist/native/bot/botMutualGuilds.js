"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$botMutualGuilds",
    version: "1.5.0",
    aliases: ["$clientMutualGuilds"],
    description: "Returns the client's mutual guilds with a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get mutual guilds from",
            rest: false,
            required: true,
            type: structures_1.ArgType.User,
        },
        {
            name: "separator",
            description: "The separator to use for every guild",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [user, sep]) {
        user ??= ctx.user;
        if (!user)
            return this.success();
        const guilds = await Promise.all(ctx.client.guilds.cache.map(async (guild) => {
            try {
                await guild.members.fetch(user.id);
                return guild;
            }
            catch {
                return null;
            }
        }));
        return this.success(guilds.filter((x) => x instanceof discord_js_1.Guild).map((guild) => guild.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=botMutualGuilds.js.map