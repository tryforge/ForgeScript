"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addOption",
    version: "1.0.0",
    description: "Adds a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description for this option",
            rest: false,
            type: structures_1.ArgType.String,
            required: false,
        },
        {
            name: "value",
            description: "The value to use for this option",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji to use for this option",
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "default",
            description: "Whether to set this option as default",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [name, desc, value, emoji, def]) {
        const menu = ctx.container.actionRow?.components[0];
        const data = {
            label: name,
            description: desc || undefined,
            value,
            default: def || false,
            emoji: emoji
                ? (0, discord_js_1.parseEmoji)(emoji) ?? {
                    name: emoji,
                }
                : undefined,
        };
        if (menu instanceof discord_js_1.BaseSelectMenuBuilder && "addOptions" in menu) {
            menu.addOptions(data);
        }
        return this.success();
    },
});
//# sourceMappingURL=addOption.js.map