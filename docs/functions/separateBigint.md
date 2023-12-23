# $separateBigint
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Separates thousands in the number
## Usage
```
$separateBigint[number;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
number | BigInt | The number to separate | Yes | No
separator | String | The separator to use | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/separateBigint.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

const NoNumberRegex = /[^0-9.]/g

export default new NativeFunction({
    name: "$separateBigint",
    version: "1.3.0",
    description: "Separates thousands in the number",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to separate",
            rest: false,
            type: ArgType.BigInt,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use",
            type: ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(_, [n, sep]) {
        const t = n.toLocaleString()
        return this.success(sep ? t.replaceAll(NoNumberRegex, sep) : t)
    },
})

```
    
</details>