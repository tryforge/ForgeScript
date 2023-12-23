# $ordinal
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Appends a suffix to the number
## Usage
```
$ordinal[number]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
number | Number | The number to append suffix to | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/ordinal.ts)
    
</summary>
    
```ts
import { ordinal } from "../functions/ordinal"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$ordinal",
    version: "1.3.0",
    description: "Appends a suffix to the number",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to append suffix to",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ n ]) {
        return this.success(ordinal(n))
    },
})
```
    
</details>