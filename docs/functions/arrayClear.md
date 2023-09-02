# $arrayClear
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Clears all elements from an array
## Usage
```
$arrayClear[variable]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable the array is held on | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayClear.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayClear",
    version: "1.0.0",
    description: "Clears all elements from an array",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        if (Array.isArray(arr)) {
            arr.length = 0
        }

        return Return.success()
    },
})
```
    
</details>