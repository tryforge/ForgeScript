"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addMediaItem",
    version: "2.4.0",
    description: "Adds a new media gallery item",
    aliases: ["$addItem"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url for the media item",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description of the media item",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [url, desc, spoiler]) {
        const item = new discord_js_1.MediaGalleryItemBuilder().setURL(url).setSpoiler(!!spoiler);
        if (desc)
            item.setDescription(desc);
        ctx.component.gallery?.addItems(item);
        return this.success();
    },
});
//# sourceMappingURL=addMediaItem.js.map