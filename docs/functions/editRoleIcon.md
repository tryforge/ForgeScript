# $editRoleIcon
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits a role's icon, returns boolean
## Usage
```
$editRoleIcon[guild ID;role ID;icon]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull the role from | Yes | No
role ID | Role | The role to edit icon for | Yes | No
icon | String | The new icon for the role | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/editRoleIcon.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editRoleIcon",
    version: "1.0.7",
    description: "Edits a role's icon, returns boolean",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            pointer: 0,
            type: ArgType.Role,
            description: "The role to edit icon for",
            rest: false,
            required: true,
        },
        {
            name: "icon",
            description: "The new icon for the role",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(_, [, role, url]) {
        return Return.success(!!(await role.setIcon(url).catch(noop)))
    },
})

```
    
</details>