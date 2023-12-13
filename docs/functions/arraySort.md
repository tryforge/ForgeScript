# $arraySort
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sorts given array
## Usage
```
$arraySort[variable]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable the array is held on | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arraySort.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arraySort",
    version: "1.2.0",
    description: "Sorts given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        }
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        if (arr !== null) ctx.setEnvironmentKey(variable, arr.sort())
        return this.success()
    },
})

```
    
</details>