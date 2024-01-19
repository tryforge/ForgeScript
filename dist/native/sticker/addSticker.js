"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addSticker",
    version: "1.0.0",
    description: "Adds a sticker to a guild, returns sticker id",
    unwrap: true,
    output: structures_1.ArgType.Sticker,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add the sticker to",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "url",
            description: "The url or file path for this sticker",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "name",
            description: "The sticker name",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "tags",
            description: "The tags to use for this sticker",
            type: structures_1.ArgType.String,
            required: true,
            rest: false,
        },
        {
            name: "description",
            description: "The description for the sticker",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [guild, url, name, tags, desc]) {
        const created = await guild.stickers
            .create({
            file: url,
            name,
            tags,
            description: desc || null,
        })
            .catch(ctx.noop);
        return this.success(created?.id);
    },
});
//# sourceMappingURL=addSticker.js.map