# $addActionRow
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an action row
## Usage
```
$addActionRow
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addActionRow.ts)
    
</summary>
    
```ts
import { ActionRowBuilder } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        ctx.container.components.push(new ActionRowBuilder())
        return Return.success()
    },
})

```
    
</details>