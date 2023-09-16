# $arrayAt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the element at given index
## Usage
```
$arrayAt[variable;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable the array is held on | Yes | No
index | Number | The index to get the element of | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayAt.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayAt",
    version: "1.0.0",
    description: "Returns the element at given index",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "index",
            type: ArgType.Number,
            description: "The index to get the element of",
            rest: false,
            required: true,
        },
    ],
    execute(ctx, [variable, index]) {
        const arr = ctx.getEnvironmentKey([variable])
        return Return.successJSON(Array.isArray(arr) ? arr.at(index) : undefined)
    },
})

```
    
</details>