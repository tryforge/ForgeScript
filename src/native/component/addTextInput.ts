/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ComponentType, LabelBuilder, TextInputBuilder, TextInputStyle } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addTextInput",
    version: "1.0.0",
    description: "Adds a text input field to the modal",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this field",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "name",
            description: "The field name, will be overwritten when used inside a label",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "type",
            description: "Paragraph or short",
            rest: false,
            type: ArgType.Enum,
            enum: TextInputStyle,
        },
        {
            name: "required",
            description: "Whether this field is required",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the field",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "default value",
            description: "The default value for the field",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "minimum length",
            description: "The minimum length needed",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "maximum length",
            description: "The max length needed",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [id, name, type, required, placeholder, value, min, max]) {
        const field = new TextInputBuilder()
            .setCustomId(id)
            .setStyle(type || TextInputStyle.Paragraph)
            .setRequired(required || false)

        if (placeholder) field.setPlaceholder(placeholder)
        if (value) field.setValue(value)
        if (min) field.setMinLength(min)
        if (max) field.setMaxLength(max)

        if (ctx.container.isInside(ComponentType.Label)) ctx.component.label?.setTextInputComponent(field)
        else ctx.container.modal?.addLabelComponents(new LabelBuilder().setLabel(name).setTextInputComponent(field))

        return this.success()
    },
})