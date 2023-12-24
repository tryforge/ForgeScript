# $addChannelType
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a channel type to the last select menu
## Usage
```
$addChannelType
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addChannelType.ts)
    
</summary>
    
```ts
import { BaseSelectMenuBuilder, ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addChannelType",
    version: "1.4.0",
    description: "Adds a channel type to the last select menu",
    unwrap: true,
    args: [
        {
            name: "type",
            description: "The channel type",
            rest: false,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ type ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof ChannelSelectMenuBuilder)
            menu.addChannelTypes(type)

        return this.success()
    },
})
```
    
</details>