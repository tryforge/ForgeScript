# $memberHighestRoleID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the highest role id of a member
## Usage
```
$memberHighestRoleID
```
---
```
$memberHighestRoleID[guild ID;user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The user to get its highest role id | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/memberHighestRoleID.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberHighestRoleID",
    version: "1.0.0",
    description: "Returns the highest role id of a member",
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
            pointer: 0,
            description: "The user to get its highest role id",
            rest: false,
            type: ArgType.Member,
            required: true
        }
    ],
    execute(ctx, [ guild, member ]) {
        member ??= ctx.member!
        return Return.success(member?.roles.highest.id)
    },
})
```
    
</details>