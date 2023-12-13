# $arrayUnshift
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds elements to the beginning of an array
## Usage
```
$arrayUnshift[name;...values]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The variable that holds the array | Yes | No
values | String | The values to append at the start of the array | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayUnshift.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayUnshift",
    version: "1.0.0",
    description: "Adds elements to the beginning of an array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "values",
            description: "The values to append at the start of the array",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const arr = ctx.getEnvironmentKey(name)
        if (Array.isArray(arr)) arr.unshift(...values)
        return this.success()
    },
})

```
    
</details>