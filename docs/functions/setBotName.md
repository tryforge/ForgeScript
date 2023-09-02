# $setBotName
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets the bot name
## Usage
```
$setBotName[name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The new name | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setBotName.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setBotName",
    version: "1.0.0",
    description: "Sets the bot name",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ name ]) {
        return Return.success(
            !!(await ctx.client.user.setUsername(name).catch(noop))
        )
    },
})
```
    
</details>