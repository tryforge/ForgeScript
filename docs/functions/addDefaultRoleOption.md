# $addDefaultRoleOption
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a default role option to the last select menu
## Usage
```
$addDefaultRoleOption
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addDefaultRoleOption.ts)
    
</summary>
    
```ts
import { BaseSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultRoleOption",
    version: "1.4.0",
    description: "Adds a default role option to the last select menu",
    unwrap: true,
    args: [
        {
            name: "role ID",
            description: "The role id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof BaseSelectMenuBuilder) {
            if (menu instanceof RoleSelectMenuBuilder)
                menu.addDefaultRoles(id)
            else if (menu instanceof MentionableSelectMenuBuilder)
                menu.addDefaultRoles(id)
        }

        return this.success()
    },
})
```
    
</details>