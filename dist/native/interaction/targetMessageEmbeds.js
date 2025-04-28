"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const embed_1 = require("../../properties/embed");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$targetMessageEmbeds",
    version: "1.5.0",
    description: "Retrieves data of embeds from the target message",
    aliases: ["$targetMessageEmbed"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "embed index",
            description: "The embed index to get data from",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: embed_1.EmbedProperty,
            required: false,
        },
        {
            name: "field index",
            description: "The index of the field to get",
            rest: false,
            type: structures_1.ArgType.Number
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [index, prop, fieldIndex]) {
        if (!ctx.interaction?.isMessageContextMenuCommand())
            return this.success();
        const message = ctx.interaction.targetMessage;
        if (typeof index !== "number")
            return this.successJSON(message.embeds.map(x => x.data));
        const embed = message.embeds[index];
        if (prop === null)
            return this.successJSON(embed);
        return this.success(embed_1.EmbedProperties[prop](embed ? discord_js_1.EmbedBuilder.from(embed) : undefined, undefined, fieldIndex));
    },
});
//# sourceMappingURL=targetMessageEmbeds.js.map