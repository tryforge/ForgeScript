# $hexToInt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Turns hex string to number
## Usage
```
$hexToInt[hex]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
hex | String | The hex to convert | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/hexToInt.ts)
    
</summary>
    
```ts
import { hex2int } from "../functions/hex"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$hexToInt",
    version: "1.2.0",
    brackets: true,
    description: "Turns hex string to number",
    unwrap: true,
    args: [
        {
            name: "hex",
            description: "The hex to convert",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ hex ]) {
        return Return.success(hex2int(hex))
    },
})
```
    
</details>