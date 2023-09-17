# $roleMembers
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the role member ids
## Usage
```
$roleMembers
```
---
```
$roleMembers[guildID;role ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guildID | Guild | The guild id to return the role from | Yes | No
role ID | Role | The role id return its members | Yes | No
separator | String | The separator to use for each member | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleMembers.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleMembers",
    version: "1.0.0",
    description: "Returns the role member ids",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its members",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each member",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, role, sep]) {
        return Return.success((role ?? ctx.role)?.members.map((x) => x.id).join(sep || ", "))
    },
})

```
    
</details>