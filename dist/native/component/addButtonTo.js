"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addButtonTo",
    version: "1.5.0",
    description: "Adds a button component to the newest row in a message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to add button to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
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
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, m, id, label, style, emoji, disabled]) {
        const btn = new discord_js_1.ButtonBuilder()
            .setDisabled(disabled || false)
            .setStyle(style);
        if (style === discord_js_1.ButtonStyle.Link)
            btn.setURL(id);
        else if (style === discord_js_1.ButtonStyle.Premium)
            btn.setSKUId(id);
        else
            btn.setCustomId(id);
        if (style !== discord_js_1.ButtonStyle.Premium) {
            btn.setLabel(label);
            if (emoji)
                btn.setEmoji(emoji);
        }
        const components = m.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        components.at(-1)?.addComponents(btn);
        return this.success(!!(await m.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=addButtonTo.js.map