# $editRolePosition
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits a role's position, returns boolean
## Usage
```
$editRolePosition[guild ID;role ID;position]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull the role from | Yes | No
role ID | Role | The role to edit position for | Yes | No
position | Number | The new position for the role | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/editRolePosition.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editRolePosition",
    version: "1.0.7",
    description: "Edits a role's position, returns boolean",
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
            description: "The role to edit position for",
            rest: false,
            required: true,
        },
        {
            name: "position",
            description: "The new position for the role",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    async execute(_, [, role, pos]) {
        return Return.success(!!(await role.setPosition(pos).catch(noop)))
    },
})

```
    
</details>