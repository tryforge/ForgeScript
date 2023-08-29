# $platform
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the member platforms
## Usage
```
$platform
```
---
```
$platform[guildID;role ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guildID | Guild | The guild id to return the member from | Yes | No
role ID | Member | The member id return its platform | Yes | No
separator | String | The separator for each platform | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/platform.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$platform",
    description: "Returns the member platforms",
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
            description: "The member id return its platform",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        },
        {
            name: "separator",
            description: "The separator for each platform",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, member, sep ]) {
        return Return.success(
            Object.keys((member ?? ctx.member)?.presence?.clientStatus ?? {}).join(sep || ", ")
        )
    }
})
```
    
</details>