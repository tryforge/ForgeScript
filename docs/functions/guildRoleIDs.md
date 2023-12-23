# $guildRoleIDs
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns every role id of the guild
## Usage
```
$guildRoleIDs
```
---
```
$guildRoleIDs[guild ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to get role ids from | Yes | No
separator | String | The separator to use for every role | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildRoleIDs.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$guildRoleIDs",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    description: "Returns every role id of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get role ids from"
        },
        {
            name: "separator",
            description: "The separator to use for every role",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, sep ]) {
        guild ??= ctx.guild!
        return this.success(guild?.roles.cache.map(x => x.id).join(sep ?? ", "))
    },
})
```
    
</details>