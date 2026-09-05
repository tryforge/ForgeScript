"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addCheckboxGroup",
    version: "2.7.0",
    description: "Adds a new checkbox group component to the newest modal label",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this field",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "min options",
            description: "The min options that can be selected",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max options",
            description: "The max options that can be selected",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "required",
            description: "Whether selecting an option is required",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [id, min, max, required]) {
        const field = new discord_js_1.CheckboxGroupBuilder()
            .setCustomId(id)
            .setRequired(required || false);
        if (min)
            field.setMinValues(min);
        if (max)
            field.setMaxValues(max);
        ctx.component.label?.setCheckboxGroupComponent(field);
        return this.success();
    },
});
//# sourceMappingURL=addCheckboxGroup.js.map