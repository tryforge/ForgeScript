# $addDefaultUserOption
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a default user option to the last select menu
## Usage
```
$addDefaultUserOption
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addDefaultUserOption.ts)
    
</summary>
    
```ts
import { BaseSelectMenuBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultUserOption",
    version: "1.4.0",
    description: "Adds a default user option to the last select menu",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof BaseSelectMenuBuilder) {
            if (menu instanceof UserSelectMenuBuilder)
                menu.addDefaultUsers(id)
            else if (menu instanceof MentionableSelectMenuBuilder)
                menu.addDefaultUsers(id)
        }

        return this.success()
    },
})
```
    
</details>