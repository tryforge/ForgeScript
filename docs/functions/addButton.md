# $addButton
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a button component to the newest row
## Usage
```
$addButton[custom ID;label;style;emoji;disabled]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id for this component | Yes | No
label | String | The button label | Yes | No
style | Enum(Primary | Secondary | Success | Danger | Link) | The style for this button | Yes | No
emoji | String | The emoji for this button | No | No
disabled | Boolean | Whether to disable the button | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addButton.ts)
    
</summary>
    
```ts
import { ButtonBuilder, ButtonStyle } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addButton",
    description: "Adds a button component to the newest row",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this component",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "label",
            description: "The button label",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "style",
            description: "The style for this button",
            enum: ButtonStyle,
            type: ArgType.Enum,
            required: true,
            rest: false
        },
        {
            name: "emoji",
            rest: false,
            type: ArgType.String,
            description: "The emoji for this button"
        },
        {
            name: "disabled",
            rest: false,
            type: ArgType.Boolean,
            description: "Whether to disable the button"
        }
    ],
    execute(ctx, [ id, label, style, emoji, disabled ]) {
        const btn = new ButtonBuilder()
            .setCustomId(id)
            .setDisabled(disabled ?? false)
            .setStyle(style)
            .setLabel(label)

        if (emoji) btn.setEmoji(emoji)

        ctx.container.components.at(-1)?.addComponents(btn)
        return Return.success()
    },
})
```
    
</details>