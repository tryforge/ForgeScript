# $roleFlags
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the role flags
## Usage
```
$roleFlags
```
---
```
$roleFlags[guild ID;role ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild id to return the role from | Yes | No
role ID | Role | The role id return its flags | Yes | No
separator | String | The separator to use for every flag | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleFlags.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleFlags",
    version: "1.3.0",
    description: "Returns the role flags",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its flags",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, role, sep]) {
        return this.success((role ?? ctx.role)?.flags.toArray().join(sep || ", "))
    },
})

```
    
</details>