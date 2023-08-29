# $memberAddRoles
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds roles to a member and returns bool
## Usage
```
$memberAddRoles[guild ID;user ID;...roles]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The user to add roles to | Yes | No
roles | Role | The roles to add | No | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/memberAddRoles.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberAddRoles",
    description: "Adds roles to a member and returns bool",
    unwrap: true,
    brackets: true,
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
            description: "The user to add roles to",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0
        },
        {
            name: "roles",
            description: "The roles to add",
            rest: true,
            type: ArgType.Role,
            pointer: 0
        }
    ],
    async execute(ctx, [ guild, member, roles ]) {
        member ??= ctx.member!
        const d = await member.roles.add(roles).catch(noop)

        return Return.success(!!d)
    },
})
```
    
</details>