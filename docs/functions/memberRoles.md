# $memberRoles
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the role ids of a member
## Usage
```
$memberRoles
```
---
```
$memberRoles[guild ID;user ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The user to get roles from | Yes | No
separator | String | The separator to use for each role | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/memberRoles.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberRoles",
    description: "Returns the role ids of a member",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "user ID",
            description: "The user to get roles from",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, member, sep ]) {
        member ??= ctx.member!
        return Return.success(member?.roles.cache.filter(x => x.id !== x.guild.id).map(x => x.id).join(sep || ", "))
    },
})
```
    
</details>