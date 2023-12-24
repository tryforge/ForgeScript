# $addDefaultChannelOption
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a default channel option to the last select menu
## Usage
```
$addDefaultChannelOption
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addDefaultChannelOption.ts)
    
</summary>
    
```ts
import { BaseSelectMenuBuilder, ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4ºº.0",
    description: "Adds a default channel option to the last select menu",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof ChannelSelectMenuBuilder)
            menu.addDefaultChannels(id)

        return this.success()
    },
})
```
    
</details>