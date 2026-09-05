"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const guild_1 = require("../../properties/guild");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getGuildPreview",
    version: "2.5.0",
    description: "Returns the preview of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to fetch preview from",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: guild_1.GuildPreviewProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    async execute(ctx, [guild, prop, sep]) {
        const preview = await (this.hasFields ? ctx.client.fetchGuildPreview(guild).catch(ctx.noop) : ctx.guild?.fetchPreview().catch(ctx.noop));
        if (preview && prop)
            return this.success(guild_1.GuildPreviewProperties[prop](preview, sep));
        return this.successJSON(preview);
    },
});
//# sourceMappingURL=getGuildPreview.js.map