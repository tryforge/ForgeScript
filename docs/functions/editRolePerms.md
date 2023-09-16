# $editRolePerms
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits a role's perms, returns boolean
## Usage
```
$editRolePerms[guild ID;role ID;...perms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull the role from | Yes | No
role ID | Role | The role to edit perms for | Yes | No
perms | Permission | The new perms for the role | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/editRolePerms.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editRolePerms",
    version: "1.0.7",
    description: "Edits a role's perms, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "role ID",
            pointer: 0,
            type: ArgType.Role,
            description: "The role to edit perms for",
            rest: false,
            required: true
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: ArgType.Permission,
            required: true
        }
    ],
    brackets: true,
    async execute(ctx, [, role, perms ]) {
        return Return.success(
            !!(await role.setPermissions(perms).catch(noop))
        )
    },
})
```
    
</details>