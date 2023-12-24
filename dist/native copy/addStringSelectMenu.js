"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addStringSelectMenu",
    version: "1.0.0",
    description: "Adds a string select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to use for this menu",
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
    execute(ctx, [id, placeholder, disabled, min, max]) {
        const menu = new discord_js_1.StringSelectMenuBuilder().setCustomId(id).setDisabled(disabled || false);
        if (placeholder)
            menu.setPlaceholder(placeholder);
        if (min !== null)
            menu.setMinValues(min);
        if (max !== null)
            menu.setMaxValues(max);
        ctx.container.components.at(-1)?.addComponents(menu);
        return this.success();
    },
});
//# sourceMappingURL=addStringSelectMenu.js.map