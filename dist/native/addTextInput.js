"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "name",
            description: "The field name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "type",
            description: "Paragraph or short",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.TextInputStyle,
        },
        {
            name: "required",
            description: "Whether this field is required",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the field",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "default value",
            description: "The default value for the field",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "minimum length",
            description: "The minimum length needed",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "maximum length",
            description: "The max length needed",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [id, label, type, required, placeholder, value, min, max]) {
        const field = new discord_js_1.TextInputBuilder()
            .setCustomId(id)
            .setLabel(label)
            .setStyle(type || discord_js_1.TextInputStyle.Paragraph)
            .setRequired(required || false);
        if (placeholder)
            field.setPlaceholder(placeholder);
        if (value)
            field.setValue(value);
        if (min)
            field.setMinLength(min);
        if (max)
            field.setMaxLength(max);
        ctx.container.modal?.addComponents(new discord_js_1.ActionRowBuilder().addComponents(field));
        return this.success();
    },
});
//# sourceMappingURL=addTextInput.js.map