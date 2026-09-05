/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { RadioGroupBuilder, RadioGroupOptionBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { getLastComponent } from "../../functions/components"

export default new NativeFunction({
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
            type: ArgType.String,
        },
        {
            name: "value",
            description: "The value to use for this option",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description for this option",
            rest: false,
            type: ArgType.String,
            required: false,
        },
        {
            name: "default",
            description: "Whether to set this option as default",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [name, value, desc, def]) {
        const comp = getLastComponent(ctx)
        const field = new RadioGroupOptionBuilder()
            .setLabel(name)
            .setValue(value)
            .setDefault(def || false)

        if (desc) field.setDescription(desc)
        if (comp instanceof RadioGroupBuilder) comp.addOptions(field)

        return this.success()
    },
})