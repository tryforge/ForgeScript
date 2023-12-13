"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editButton",
    version: "1.0.7",
    description: "Edits a button component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to find the component",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "new custom ID",
            description: "The new custom id for this component",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "label",
            description: "The button label",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "style",
            description: "The style for this button",
            enum: discord_js_1.ButtonStyle,
            type: structures_1.ArgType.Enum,
            required: true,
            rest: false,
        },
        {
            name: "emoji",
            rest: false,
            type: structures_1.ArgType.String,
            description: "The emoji for this button",
        },
        {
            name: "disabled",
            rest: false,
            type: structures_1.ArgType.Boolean,
            description: "Whether to disable the button",
        },
    ],
    execute(ctx, [oldId, id, label, style, emoji, disabled]) {
        const rowIndex = ctx.container.components.findIndex((x) => x.components.some((x) => "custom_id" in x.data && x.data.custom_id === oldId));
        if (rowIndex === -1)
            return this.success();
        const btn = ctx.container.components[rowIndex].components.find((x) => "custom_id" in x.data && x.data.custom_id === oldId);
        if (!btn)
            return this.success();
        btn.setCustomId(id)
            .setDisabled(disabled || false)
            .setStyle(style)
            .setLabel(label);
        if (style === discord_js_1.ButtonStyle.Link)
            btn.setURL(id);
        else
            btn.setCustomId(id);
        if (emoji)
            btn.setEmoji(emoji);
        return this.success();
    },
});
//# sourceMappingURL=editButton.js.map