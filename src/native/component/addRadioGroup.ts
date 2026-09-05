/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { RadioGroupBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addRadioGroup",
    version: "2.7.0",
    description: "Adds a new radio group component to the newest modal label",
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
            name: "required",
            description: "Whether selecting an option is required",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [id, required]) {
        const field = new RadioGroupBuilder()
            .setCustomId(id)
            .setRequired(required || false)

        ctx.component.label?.setRadioGroupComponent(field)

        return this.success()
    },
})