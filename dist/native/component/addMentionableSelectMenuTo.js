"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addMentionableSelectMenuTo",
    version: "1.5.0",
    description: "Creates a mentionable select menu to a message",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    unwrap: true,
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
            description: "The message to add row to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        }
    ],
    async execute(ctx, [, m, id, placeholder, min, max, disabled]) {
        const menu = new discord_js_1.MentionableSelectMenuBuilder()
            .setDisabled(disabled ?? false)
            .setCustomId(id);
        if (placeholder)
            menu.setPlaceholder(placeholder);
        if (min)
            menu.setMinValues(min);
        if (max)
            menu.setMaxValues(max);
        const components = m.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        components.at(-1)?.addComponents(menu);
        return this.success(!!(await m.edit({ components: components }).catch(ctx.noop)));
    }
});
//# sourceMappingURL=addMentionableSelectMenuTo.js.map