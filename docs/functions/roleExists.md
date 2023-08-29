# $roleExists
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether an role id exists
## Usage
```
$roleExists[guild ID;role ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to check for the role | Yes | No
role ID | String | The role to check for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/roleExists.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleExists",
    description: "Returns whether an role id exists",
    unwrap: true,
    brackets: true,
    args: [ 
        {
            name: "guild ID",
            description: "The guild to check for the role",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "role ID",
            description: "The role to check for",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            guild.roles.cache.has(id)
        )
    },
})
```
    
</details>