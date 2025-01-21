"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editMentionableSelectMenuOf",
    version: "2.2.0",
    description: "Edits a mentionable select menu of a message, returns bool",
    brackets: true,
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
            description: "The message to edit select menu for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "old custom ID",
            description: "The custom id of the menu to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "new custom ID",
            description: "The new custom id to use for this menu",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: structures_1.ArgType.Boolean,
            rest: false,
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
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, m, old, id, placeholder, disabled, min, max]) {
        const components = m.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        for (let i = 0, len = components.length; i < len; i++) {
            const comp = components[i];
            const menu = comp.components[0];
            if (menu instanceof discord_js_1.MentionableSelectMenuBuilder && menu.data.custom_id === old) {
                menu.setCustomId(id);
                if (placeholder)
                    menu.setPlaceholder(placeholder);
                if (typeof disabled === "boolean")
                    menu.setDisabled(disabled);
                if (typeof min === "number")
                    menu.setMinValues(min);
                if (typeof max === "number")
                    menu.setMaxValues(max);
                break;
            }
        }
        return this.success(!!(await m.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editMentionableSelectMenuOf.js.map