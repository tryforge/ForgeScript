"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addThumbnail",
    version: "2.4.0",
    description: "Adds a new thumbnail accessory",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url for the thumbnail",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description of the thumbnail",
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
        const thumbnail = new discord_js_1.ThumbnailBuilder().setURL(url).setSpoiler(!!spoiler);
        if (desc)
            thumbnail.setDescription(desc);
        ctx.component.section?.setThumbnailAccessory(thumbnail);
        return this.success();
    },
});
//# sourceMappingURL=addThumbnail.js.map