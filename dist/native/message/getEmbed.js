"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const embed_1 = require("../../properties/embed");
exports.default = new structures_1.NativeFunction({
    name: "$getEmbed",
    version: "1.0.3",
    description: "Retrieves data of an embed",
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "embed index",
            description: "The embed index to get data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: embed_1.EmbedProperty,
            required: true,
        },
        {
            name: "field index",
            description: "Index of field to get",
            rest: false,
            type: structures_1.ArgType.Number
        },
    ],
    execute(_, [, m, index, prop, fieldIndex]) {
        const embed = m.embeds[index];
        return this.success(embed_1.EmbedProperties[prop](embed ? discord_js_1.EmbedBuilder.from(embed) : undefined, undefined, fieldIndex));
    },
});
//# sourceMappingURL=getEmbed.js.map