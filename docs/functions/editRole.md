# $editRole
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits role data, returns boolean
## Usage
```
$editRole[guild ID;role ID;role name;role color;role icon;hoisted;mentionable;...perms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull the role from | Yes | No
role ID | Role | The role to edit data | Yes | No
role name | String | The new role name, leave empty to not modify | No | No
role color | String | The new role color, leave empty to not modify | No | No
role icon | String | The new role icon, leave empty to not modify | No | No
hoisted | Boolean | Whether the role is hoisted, leave empty to not modify | No | No
mentionable | Boolean | Whether the role can be mentioned, leave empty to not modify | No | No
perms | Permission | The new perms for the role | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/editRole.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"
import { ColorResolvable } from "discord.js"

export default new NativeFunction({
    name: "$editRole",
    version: "1.0.7",
    description: "Edits role data, returns boolean",
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
            description: "The role to edit data",
            rest: false,
            required: true,
        },
        {
            name: "role name",
            description: "The new role name, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "role color",
            description: "The new role color, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "role icon",
            description: "The new role icon, leave empty to not modify",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted, leave empty to not modify",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "mentionable",
            description: "Whether the role can be mentioned, leave empty to not modify",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: ArgType.Permission,
            required: true,
        },
    ],
    brackets: true,
    async execute(_, [, role, name, color, icon, hoist, mentionable, perms]) {
        return Return.success(
            !!(await role
                .edit({
                    color: (color as ColorResolvable) || undefined,
                    hoist: hoist || undefined,
                    icon: icon || undefined,
                    mentionable: mentionable || undefined,
                    name: name || undefined,
                    permissions: perms || undefined,
                })
                .catch(noop))
        )
    },
})

```
    
</details>