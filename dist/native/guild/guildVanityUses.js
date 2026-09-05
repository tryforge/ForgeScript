"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildVanityUses",
    version: "1.0.0",
    description: "Returns the guilds vanity uses",
    unwrap: true,
    aliases: [
        "$serverVanityUses"
    ],
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to return its vanity uses",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [guild]) {
        guild ??= ctx.guild;
        const vanity = await guild?.fetchVanityData().catch(ctx.noop);
        return this.success(vanity ? vanity.uses : null);
    },
});
//# sourceMappingURL=guildVanityUses.js.map