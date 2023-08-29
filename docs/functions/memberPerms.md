# $memberPerms
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the member perms
## Usage
```
$memberPerms
```
---
```
$memberPerms[guildID;role ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guildID | Guild | The guild id to return the member from | Yes | No
role ID | Member | The member id return its perms | Yes | No
separator | String | The separator to use for every perm | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/memberPerms.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberPerms",
    description: "Returns the member perms",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "role ID",
            description: "The member id return its perms",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            required: false,
            rest: false,
        }
    ],
    execute(ctx, [ guild, member, sep ]) {
        return Return.success(
            (member ?? ctx.member)?.permissions.toArray().join(sep || ", ")
        )
    }
})
```
    
</details>