"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
        {
            name: "index",
            description: "The index of the snapshot to fetch, defaults to 0",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [, message, index]) {
        const snapshot = (message ?? ctx.message)?.messageSnapshots.at(index || 0);
        if (snapshot) {
            ctx.container.content = snapshot.content;
            ctx.container.embeds.push(...snapshot.embeds.map(x => discord_js_1.EmbedBuilder.from(x)));
            ctx.container.components.push(...snapshot.components.map(x => (0, components_1.buildComponent)(x, ctx)));
            ctx.container.files.push(...snapshot.attachments.map(x => new discord_js_1.AttachmentBuilder(x.url, { name: x.name })));
            ctx.container.stickers.push(...snapshot.stickers.map(x => x.id));
        }
        return this.success();
    },
});
//# sourceMappingURL=fetchSnapshot.js.map