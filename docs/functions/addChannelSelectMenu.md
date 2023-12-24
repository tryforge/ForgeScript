# $addChannelSelectMenu
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a channel select menu
## Usage
```
$addChannelSelectMenu[custom ID;placeholder;min values;max values;disabled]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id for this menu | Yes | No
placeholder | String | The placeholder to use for the menu | No | No
min values | Number | The min values to choose for the menu | No | No
max values | Number | The max values to choose for the menu | No | No
disabled | Boolean | Whether the menu is disabled by default | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addChannelSelectMenu.ts)
    
</summary>
    
```ts
import { ChannelSelectMenuBuilder, RoleSelectMenuBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$addChannelSelectMenu",
    version: "1.4.0",
    description: "Creates a channel select menu",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            required: false,
            type: ArgType.Boolean
        }
    ],
    execute(ctx, [ id, placeholder, min, max, disabled ]) {
        const menu = new ChannelSelectMenuBuilder()
            .setDisabled(disabled ?? false)
            .setCustomId(id)
            
        if (placeholder)
            menu.setPlaceholder(placeholder)
        if (min)
            menu.setMinValues(min)
        if (max)
            menu.setMaxValues(max)
        
        ctx.container.components.at(-1)?.addComponents(menu)
        return this.success()
    }
})
```
    
</details>