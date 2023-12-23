# $addRoleSelectMenu
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a role select menu
## Usage
```
$addRoleSelectMenu[custom ID;placeholder;min values;max values;disabled;...default roles]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id for this menu | Yes | No
placeholder | String | The placeholder to use for the menu | No | No
min values | Number | The min values to choose for the menu | No | No
max values | Number | The max values to choose for the menu | No | No
disabled | Boolean | Whether the menu is disabled by default | No | No
default roles | String | The default selected roles to use | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addRoleSelectMenu.ts)
    
</summary>
    
```ts
import { RoleSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$addRoleSelectMenu",
    version: "1.3.0",
    description: "Creates a role select menu",
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
        },
        {
            name: "default roles",
            rest: true,
            type: ArgType.String,
            description: "The default selected roles to use",
            required: true
        }
    ],
    execute(ctx, [ id, placeholder, min, max, disabled, roles ]) {
        const menu = new RoleSelectMenuBuilder()
            .setDefaultRoles(roles)
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