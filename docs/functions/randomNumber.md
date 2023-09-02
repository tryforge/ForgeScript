# $randomNumber
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a random number (no cache)
## Usage
```
$randomNumber[min;max;decimals]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
min | Number | The minimum possible number | Yes | No
max | Number | The max possible number | No | No
decimals | Boolean | Whether to use decimals | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomNumber.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomNumber",
    version: "1.0.0",
    description: "Returns a random number (no cache)",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "min",
            description: "The minimum possible number",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "max",
            description: "The max possible number",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "decimals",
            description: "Whether to use decimals",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    execute(ctx, [ min, max, decimals ]) {
        const rnd = max ? Math.random() * (max - min) + min : Math.random() * min
        return Return.success(decimals ? Math.floor(rnd) : rnd)
    },
})
```
    
</details>