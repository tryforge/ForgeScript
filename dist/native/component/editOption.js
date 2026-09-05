"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$editOption",
    version: "1.4.0",
    description: "Edits a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name to find",
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
            description: "The new description for this option",
            rest: false,
            type: structures_1.ArgType.String,
            required: false,
        },
        {
            name: "value",
            description: "The new value for this option",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for this option",
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
            const comp = ctx.container.components[i];
            const comps = comp instanceof discord_js_1.ContainerBuilder
                ? comp.components.map((x) => (0, components_1.buildComponent)(x.toJSON()))
                : ("components" in comp ? comp.components : undefined);
            if (!comps)
                continue;
            for (let n = 0, len = comps.length; n < len; n++) {
                const row = comps[n];
                const menu = row instanceof discord_js_1.ActionRowBuilder ? row.components[0] : row;
                if (menu instanceof discord_js_1.StringSelectMenuBuilder) {
                    const index = menu.options.findIndex(x => x.data.label === old);
                    if (index !== -1) {
                        const option = menu.options[index];
                        option.setLabel(name);
                        if (value)
                            option.setValue(value);
                        if (emoji)
                            option.setEmoji((0, discord_js_1.parseEmoji)(emoji));
                        if (desc)
                            option.setDescription(desc);
                        if (typeof def === "boolean")
                            option.setDefault(def);
                        if (comp instanceof discord_js_1.ContainerBuilder)
                            comp.spliceComponents(n, 1, new discord_js_1.ActionRowBuilder().addComponents(menu));
                        return this.success();
                    }
                }
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=editOption.js.map