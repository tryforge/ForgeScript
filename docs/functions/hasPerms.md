# $hasPerms
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether given member has X perms
## Usage
```
$hasPerms[guild ID;user ID;...perms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The user to check for perms | Yes | No
perms | String | The perms to check for | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/hasPerms.ts)
    
</summary>
    
```ts
import { PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$hasPerms",
    version: "1.0.0",
    description: "Returns whether given member has X perms",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check for perms",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "perms",
            description: "The perms to check for",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(_, [, member, perms]) {
        return this.success(member.permissions.has(perms as PermissionsString[]))
    },
})

```
    
</details>