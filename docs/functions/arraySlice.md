# $arraySlice
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Slices an array and loads it to another variable
## Usage
```
$arraySlice[variable;other variable;start;end]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable where the array is held | Yes | No
other variable | String | The variable to load the result to | Yes | No
start | Number | The start index to slice | Yes | No
end | Number | The end index to slice | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arraySlice.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arraySlice",
    version: "1.0.0",
    description: "Slices an array and loads it to another variable",
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
        {
            name: "start",
            description: "The start index to slice",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "end",
            description: "The end index to slice",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [var1, var2, start, end]) {
        const arr = ctx.getEnvironmentKey(var1)

        if (Array.isArray(arr)) {
            ctx.setEnvironmentKey(var2, arr.slice(start, end || undefined))
        }

        return this.success()
    },
})

```
    
</details>