# $arrayJoin
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Joins all elements from an array with given separator
## Usage
```
$arrayJoin[variable;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable the array is held on | Yes | No
separator | String | The separator to use for every element | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayJoin.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayJoin",
    version: "1.0.0",
    description: "Joins all elements from an array with given separator",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for every element",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, sep]) {
        const arr = ctx.getEnvironmentKey(name)
        return this.success(Array.isArray(arr) ? arr.join(sep || ", ") : undefined)
    },
})

```
    
</details>