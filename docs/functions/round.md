# $round
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Rounds provided number to a certain number of decimal places
## Usage
```
$round[number;decimal places]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
number | Number | The number to use | Yes | No
decimal places | Number | The number of decimal places to round to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/round.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$round",
    version: "1.0.0",
    description: "Rounds provided number to a certain number of decimal places",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "decimal places",
            description: "The number of decimal places to round to",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(_, [n, dp]) {
        dp = dp === null ? 1 : Math.pow(10, dp)
        return Return.success(Math.round(n * dp) / dp)
    },
})

```
    
</details>