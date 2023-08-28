# $addStringSelectMenu
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a string select menu
## Usage
```
$addStringSelectMenu[custom ID;placeholder;disabled;min values;max values]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id to use for this menu | Yes | No
placeholder | String | The placeholder to use for the menu | No | No
disabled | Boolean | Whether to keep this menu disabled | No | No
min values | Number | The min values to choose for the menu | No | No
max values | Number | The max values to choose for the menu | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addStringSelectMenu.ts)
    
</summary>
    
```ts
import { StringSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addStringSelectMenu",
    description: "Adds a string select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to use for this menu",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: ArgType.Boolean,
            rest: false
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number
        },
    ],
    execute(ctx, [ id, placeholder, disabled, min, max ]) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(id)
            .setDisabled(disabled ?? false)

        if (placeholder) menu.setPlaceholder(placeholder)
        if (min !== null) menu.setMinValues(min)
        if (max !== null) menu.setMaxValues(max)

        ctx.container.components.at(-1)?.addComponents(menu)

        return Return.success()
    }
})
```
    
</details>