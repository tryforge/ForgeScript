# $roleIDs
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the role ids of a guild
## Usage
```
$roleIDs
```
---
```
$roleIDs[guild ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to return the roles of | Yes | No
separator | String | The separator to use for each role | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleIDs.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleIDs",
    description: "Returns the role ids of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the roles of",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, sep ]) {
        return Return.success(
            (guild ?? ctx.guild)?.roles.cache.filter(x => x.guild.id !== x.id).map(x => x.id).join(sep || ", ")
        )
    },
})
```
    
</details>