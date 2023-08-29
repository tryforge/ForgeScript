# $addTextInput
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a text input field to the modal
## Usage
```
$addTextInput[custom ID;name;type;required;placeholder;default value;minimum length;maximum length]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id for this field | Yes | No
name | String | The field name | Yes | No
type | Enum (`Short`, `Paragraph`) | Paragraph or short | No | No
required | Boolean | Whether this field is required | No | No
placeholder | String | The placeholder to use for the field | No | No
default value | String | The default value for the field | No | No
minimum length | Number | The minimum length needed | No | No
maximum length | Number | The max length needed | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addTextInput.ts)
    
</summary>
    
```ts
import { ActionRowBuilder, TextInputBuilder, TextInputStyle } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addTextInput",
    description: "Adds a text input field to the modal",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this field",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "name",
            description: "The field name",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "type",
            description: "Paragraph or short",
            rest: false,
            type: ArgType.Enum,
            enum: TextInputStyle
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
            type: ArgType.String
        },
        {
            name: "default value",
            description: "The default value for the field",
            rest: false,
            type: ArgType.String
        },
        {
            name: "minimum length",
            description: "The minimum length needed",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "maximum length",
            description: "The max length needed",
            rest: false,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ id, label, type, required, placeholder, value, min, max ]) {
        const field = new TextInputBuilder()
            .setCustomId(id)
            .setLabel(label)
            .setStyle(type || TextInputStyle.Paragraph)
            .setRequired(required || false)

        if (placeholder) field.setPlaceholder(placeholder)
        if (value) field.setValue(value)
        if (min) field.setMinLength(min)
        if (max) field.setMaxLength(max)
        
        ctx.container.modal?.addComponents(
            new ActionRowBuilder<TextInputBuilder>()
                .addComponents(field)
        )

        return Return.success()
    },
})
```
    
</details>