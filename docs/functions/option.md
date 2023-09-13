# $option
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns an option value with given name (interaction command)
## Usage
```
$option[option name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
option name | String | The option name to retrieve its value | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/option.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$option",
    version: "1.0.6",
    description: "Returns an option value with given name (interaction command)",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "option name",
            description: "The option name to retrieve its value",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ name ]) {
        return Return.success(ctx.isCommand() ? ctx.interaction.options.get(name)?.value : null)
    },
})
```
    
</details>