/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { AttachmentBuilder, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { buildComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$fetchSnapshot",
    version: "2.7.0",
    brackets: false,
    unwrap: true,
    description: "Fetches all data from a message snapshot and loads it to the next response",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message,
        },
        {
            name: "index",
            description: "The index of the snapshot to fetch, defaults to 0",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [, message, index]) {
        const snapshot = (message ?? ctx.message)?.messageSnapshots.at(index || 0)
        if (snapshot) {
            ctx.container.content = snapshot.content
            ctx.container.embeds.push(...snapshot.embeds.map(x => EmbedBuilder.from(x)))
            ctx.container.components.push(...snapshot.components.map(x => buildComponent(x, ctx)))
            ctx.container.files.push(...snapshot.attachments.map(x => new AttachmentBuilder(x.url, { name: x.name })))
            ctx.container.stickers.push(...snapshot.stickers.map(x => x.id))
        }
        return this.success()
    },
})