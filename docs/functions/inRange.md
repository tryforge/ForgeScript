# $inRange
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Whether a number is in range
## Usage
```
$inRange[number;min;max]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
number | Number | The number to validate | Yes | No
min | Number | The min value | No | No
max | Number | The max value | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/inRange.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$inRange",
    version: "1.0.0",
    description: "Whether a number is in range",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to validate",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "min",
            description: "The min value",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "max",
            description: "The max value",
            rest: false,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ n, min, max ]) {
        return Return.success(
            min !== null && max !== null ?
                n >= min && n <= max :
                min !== null ?
                    n >= min :
                    max !== null ?
                        n <= max :
                        true
        )
    },
})
```
    
</details>