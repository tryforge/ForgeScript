# $roleTags
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns all role tags
## Usage
```
$roleTags
```
---
```
$roleTags[guild ID;role ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild id to return the role from | Yes | No
role ID | Role | The role id return its perms | Yes | No
separator | String | The separator to use for every perm | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleTags.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$roleTags",
    version: "1.3.0",
    description: "Returns all role tags",
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
            description: "The role id return its perms",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, r, sep ]) {
        r ??= ctx.role!
        return this.success(Object.entries(r.tags ?? {}).filter(x => x[1] === true).map(x => x[0]))
    },
})
```
    
</details>