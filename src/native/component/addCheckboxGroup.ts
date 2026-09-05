/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { CheckboxGroupBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.String,
        },
        {
            name: "min options",
            description: "The min options that can be selected",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max options",
            description: "The max options that can be selected",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "required",
            description: "Whether selecting an option is required",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [id, min, max, required]) {
        const field = new CheckboxGroupBuilder()
            .setCustomId(id)
            .setRequired(required || false)

        if (min) field.setMinValues(min)
        if (max) field.setMaxValues(max)

        ctx.component.label?.setCheckboxGroupComponent(field)

        return this.success()
    },
})