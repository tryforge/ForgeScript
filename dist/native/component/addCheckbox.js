"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addCheckbox",
    version: "2.7.0",
    description: "Adds a new checkbox component to the newest modal label",
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
            name: "default",
            description: "Whether this field is checked by default",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [id, def]) {
        const field = new discord_js_1.CheckboxBuilder().setCustomId(id);
        if (typeof def === "boolean")
            field.setDefault(def);
        ctx.component.label?.setCheckboxComponent(field);
        return this.success();
    },
});
//# sourceMappingURL=addCheckbox.js.map