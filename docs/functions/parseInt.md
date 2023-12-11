# $parseInt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Implements native parseInt's function into ForgeScript
## Usage
```
$parseInt[value;radix]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
value | String | The number to parse | Yes | No
radix | Number | Radix to use for the parser | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/parseInt.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$parseInt",
    version: "1.2.0",
    description: "Implements native parseInt's function into ForgeScript",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "value",
            description: "The number to parse",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "radix",
            rest: false,
            required: false,
            description: "Radix to use for the parser",
            type: ArgType.Number
        }
    ],
    execute(ctx, [ val, radix ]) {
        return Return.success(parseInt(val, radix ?? undefined))
    },
})
```
    
</details>