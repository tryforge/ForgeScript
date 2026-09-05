/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildPreviewProperties, GuildPreviewProperty } from "../../properties/guild"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.String,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: GuildPreviewProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [guild, prop, sep]) {
        const preview = await (this.hasFields ? ctx.client.fetchGuildPreview(guild).catch(ctx.noop) : ctx.guild?.fetchPreview().catch(ctx.noop))
        if (preview && prop) return this.success(GuildPreviewProperties[prop](preview, sep))
        return this.successJSON(preview)
    },
})