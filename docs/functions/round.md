# $round
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a supplied numeric expression rounded to the nearest integer
## Usage
```
$round[number]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
number | Number | The number to use | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/round.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$round",
    version: "1.0.0",
    description: "Returns a supplied numeric expression rounded to the nearest integer",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ n ]) {
        return Return.success(Math.round(n))
    },
})
```
    
</details>