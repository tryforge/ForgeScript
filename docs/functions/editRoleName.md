# $editRoleName
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits a role's name, returns boolean
## Usage
```
$editRoleName[guild ID;role ID;name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull the role from | Yes | No
role ID | Role | The role to edit name for | Yes | No
name | String | The new name for the role | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/editRoleName.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editRoleName",
    version: "1.0.7",
    description: "Edits a role's name, returns boolean",
    unwrap: true,
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
            description: "The role to edit name for",
            rest: false,
            required: true,
        },
        {
            name: "name",
            description: "The new name for the role",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(_, [, role, name]) {
        return this.success(!!(await role.setName(name).catch(noop)))
    },
})

```
    
</details>