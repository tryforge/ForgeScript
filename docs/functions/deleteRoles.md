# $deleteRoles
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Delete given role ids, returns the count of roles deleted
## Usage
```
$deleteRoles[guild ID;...roles]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to delete roles from | Yes | No
roles | Role | The roles to delete | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteRoles.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteRoles",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given role ids, returns the count of roles deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete roles from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "roles",
            description: "The roles to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Role,
        },
    ],
    async execute(_, [, roles]) {
        let count = 0
        for (let i = 0, len = roles.length; i < len; i++) {
            const role = roles[i]
            const success = await role.delete().catch(noop)
            if (success) count++
        }

        return Return.success(count)
    },
})

```
    
</details>