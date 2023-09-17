# $arrayReverse
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Reverses an array and loads it to another variable
## Usage
```
$arrayReverse[variable;other variable]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable where the array is held | Yes | No
other variable | String | The variable to load the result to | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayReverse.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayReverse",
    version: "1.0.0",
    description: "Reverses an array and loads it to another variable",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable where the array is held",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "other variable",
            description: "The variable to load the result to",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [var1, var2]) {
        const arr = ctx.getEnvironmentKey(var1)

        if (Array.isArray(arr)) {
            ctx.setEnvironmentKey(var2, arr.reverse())
        }

        return Return.success()
    },
})

```
    
</details>