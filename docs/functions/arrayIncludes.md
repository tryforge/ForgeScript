# $arrayIncludes
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether a value exists in an array
## Usage
```
$arrayIncludes[variable;value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable the array is held on | Yes | No
value | String | The value to check for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayIncludes.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayIncludes",
    version: "1.0.0",
    description: "Checks whether a value exists in an array",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "value",
            description: "The value to check for",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [ name, value ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        return Return.success(Array.isArray(arr) ? arr.includes(value) : false)
    },
})
```
    
</details>