# $arrayLoad
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Loads an array to an environment variable
## Usage
```
$arrayLoad[variable;separator;...values]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable name to load this array to | Yes | No
separator | String | The separator to use for the array elements | Yes | No
values | String | The elements of the array | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayLoad.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayLoad",
    version: "1.0.0",
    description: "Loads an array to an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to load this array to",
            required: true,
            rest: false,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for the array elements",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "values",
            description: "The elements of the array",
            required: true,
            rest: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [ name, sep, values ]) {
        ctx.setEnvironmentKey(name, values.join(";").split(sep))
        return Return.success()
    },
})
```
    
</details>