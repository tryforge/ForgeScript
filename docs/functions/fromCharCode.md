# $fromCharCode
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the characters from given codes
## Usage
```
$fromCharCode[...codes]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
codes | Number | The codes to get its char codes | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/fromCharCode.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$fromCharCode",
    version: "1.0.6",
    description: "Returns the characters from given codes",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "codes",
            description: "The codes to get its char codes",
            type: ArgType.Number,
            rest: true,
            required: true
        }
    ],
    execute(ctx, [ codes ]) {
        return Return.success(String.fromCharCode(...codes))
    },
})
```
    
</details>