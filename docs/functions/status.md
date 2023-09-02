# $status
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the member status
## Usage
```
$status
```
---
```
$status[guildID;role ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guildID | Guild | The guild id to return the member from | Yes | No
role ID | Member | The member id return its status | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/status.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$status",
    version: "1.0.0",
    description: "Returns the member status",
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
            description: "The member id return its status",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [ guild, member ]) {
        return Return.success(
            (member ?? ctx.member)?.presence?.status
        )
    }
})
```
    
</details>