# $intToHex
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Turns integer to hex
## Usage
```
$intToHex[int]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
int | Number | The integer to convert | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/intToHex.ts)
    
</summary>
    
```ts
import { hex2int, int2hex } from "../functions/hex"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$intToHex",
    version: "1.2.0",
    brackets: true,
    description: "Turns integer to hex",
    unwrap: true,
    args: [
        {
            name: "int",
            description: "The integer to convert",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ hex ]) {
        return Return.success(int2hex(hex))
    },
})
```
    
</details>