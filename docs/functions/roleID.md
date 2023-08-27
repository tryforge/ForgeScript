# $roleID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a role id with given name
## Usage
```
$roleID
```
---
```
$roleID[guildID;...name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guildID | Guild | The guild id to return the role from | Yes | No
name | String | The role name to return its id | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleID.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleID",
    description: "Returns a role id with given name",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "name",
            description: "The role name to return its id",
            rest: true,
            type: ArgType.String,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [ guild, args ]) {
        if (this.hasFields) {
            const name = args.join(";")
            return Return.success(guild.roles.cache.find(x => x.name === name)?.id)
        }
        return Return.success(ctx.role?.id)
    }
})
```
    
</details>