"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editOption",
    version: "1.4.0",
    description: "Edits a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "new name",
            description: "The new option name",
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
    execute(ctx, [old, name, desc, value, emoji, def]) {
        for (let i = 0, len = ctx.container.components.length; i < len; i++) {
            const row = ctx.container.components[i];
            const menu = row.components[0];
            if (menu instanceof discord_js_1.StringSelectMenuBuilder) {
                const index = menu.options.findIndex(x => x.data.label === old);
                if (index !== -1) {
                    const option = menu.options[index];
                    option
                        .setLabel(name);
                    if (value)
                        option.setValue(value);
                    if (emoji)
                        option.setEmoji((0, discord_js_1.parseEmoji)(emoji));
                    if (desc)
                        option.setDescription(desc);
                    if (def)
                        option.setDefault(def);
                    break;
                }
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=editOption.js.map