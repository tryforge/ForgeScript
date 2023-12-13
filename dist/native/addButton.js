"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addButton",
    version: "1.0.0",
    description: "Adds a button component to the newest row",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this component",
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
    execute(ctx, [id, label, style, emoji, disabled]) {
        const btn = new discord_js_1.ButtonBuilder()
            .setDisabled(disabled || false)
            .setStyle(style)
            .setLabel(label);
        if (style === discord_js_1.ButtonStyle.Link)
            btn.setURL(id);
        else
            btn.setCustomId(id);
        if (emoji)
            btn.setEmoji(emoji);
        ctx.container.components.at(-1)?.addComponents(btn);
        return this.success();
    },
});
//# sourceMappingURL=addButton.js.map