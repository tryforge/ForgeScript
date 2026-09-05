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
    name: "$addRadioOption",
    version: "2.7.0",
    description: "Adds a new option to the newest radio group component",
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
            name: "value",
            description: "The value to use for this option",
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
            name: "default",
            description: "Whether to set this option as default",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [name, value, desc, def]) {
        const comp = (0, components_1.getLastComponent)(ctx);
        const field = new discord_js_1.RadioGroupOptionBuilder()
            .setLabel(name)
            .setValue(value)
            .setDefault(def || false);
        if (desc)
            field.setDescription(desc);
        if (comp instanceof discord_js_1.RadioGroupBuilder)
            comp.addOptions(field);
        return this.success();
    },
});
//# sourceMappingURL=addRadioOption.js.map