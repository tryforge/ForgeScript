/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { CheckboxBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.String,
        },
        {
            name: "default",
            description: "Whether this field is checked by default",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [id, def]) {
        const field = new CheckboxBuilder().setCustomId(id)
        if (typeof def === "boolean") field.setDefault(def)

        ctx.component.label?.setCheckboxComponent(field)

        return this.success()
    },
})