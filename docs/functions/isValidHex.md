# $isValidHex
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The value to check for
## Usage
```
$isValidHex[hex]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
hex | String | The hex to check for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isValidHex.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export const MaxHexIntValue = 0xffffff as const
export const MinHexIntValue = 0 as const

export default new NativeFunction({
    name: "$isValidHex",
    version: "1.3.0",
    description: "The value to check for",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "hex",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The hex to check for"
        }
    ],
    execute(ctx, [ hex ]) {
        const int = parseInt(hex.replace("#", ""), 16)
        return this.success(!isNaN(int) && int >= MinHexIntValue && int <= MaxHexIntValue)
    },
})
```
    
</details>