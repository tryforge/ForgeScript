# $return
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a value
## Usage
```
$return
```
---
```
$return[value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
value | String | The value to return | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/return.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$return",
    version: "1.0.0",
    description: "Returns a value",
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The value to return",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(_, [ val ]) {
        return Return.return(val ?? "")
    },
})

```
    
</details>