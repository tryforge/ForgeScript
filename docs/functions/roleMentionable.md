# $roleMentionable
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether the role is mentionable
## Usage
```
$roleMentionable
```
---
```
$roleMentionable[guildID;role ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guildID | Guild | The guild id to return the role from | Yes | No
role ID | Role | The role id return its mentionable state | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleMentionable.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleMentionable",
    version: "1.0.0",
    description: "Returns whether the role is mentionable",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "role ID",
            description: "The role id return its mentionable state",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true
        },
    ],
    execute(ctx, [ guild, role ]) {
        return Return.success(
            (role ?? ctx.role)?.mentionable
        )
    }
})
```
    
</details>