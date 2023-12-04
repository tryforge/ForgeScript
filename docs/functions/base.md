# $base
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Convert number from one base to another
## Usage
```
$base[number;to;from]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
number | String | The target number for conversion | Yes | No
to | Number | The target base | Yes | No
from | Number | The source base | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/base.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$base",
    version: "1.1.0",
    description: "Convert number from one base to another",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The target number for conversion",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "to",
            description: "The target base",
            type: ArgType.Number,
            rest: false,
            required: true,
        },
        {
            name: "from",
            description: "The source base",
            type: ArgType.Number,
            rest: false,
        },
    ],
    execute(_, [n, to, from]) {
        return Return.success(parseInt(n, from ?? 10).toString(to))
    },
})

```
    
</details>