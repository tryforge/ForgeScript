# $addOption
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a select menu option
## Usage
```
$addOption[name;description;value;emoji;default]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The option name | Yes | No
description | String | The description for this option | Yes | No
value | String | The value to use for this option | Yes | No
emoji | String | The emoji to use for this option | No | No
default | Boolean | Whether to set this option as default | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addOption.ts)
    
</summary>
    
```ts
import { APISelectMenuOption, StringSelectMenuBuilder, parseEmoji } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addOption",
    version: "1.0.0",
    description: "Adds a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "description",
            description: "The description for this option",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "value",
            description: "The value to use for this option",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "emoji",
            description: "The emoji to use for this option",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "default",
            description: "Whether to set this option as default",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    execute(ctx, [ name, desc, value, emoji, def ]) {
        const comp = ctx.container.components.at(-1)?.components[0]
        
        const data: APISelectMenuOption = {
            label: name,
            description: desc,
            value,
            default: def ?? false,
            emoji: emoji ? parseEmoji(emoji) as APISelectMenuOption["emoji"] ?? {
                name: emoji
            } : undefined
        }

        if (!!comp && "addOptions" in comp) {
            comp.addOptions(data)
        }

        return Return.success()
    },
})
```
    
</details>