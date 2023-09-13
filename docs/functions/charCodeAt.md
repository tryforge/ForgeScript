# $charCodeAt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the char code at given index
## Usage
```
$charCodeAt[message;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
message | String | The string to get char code of | Yes | No
index | Number | The index to get its char code | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/charCodeAt.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$charCodeAt",
    version: "1.0.6",
    description: "Returns the char code at given index",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to get char code of",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "index",
            description: "The index to get its char code",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ m, index ]) {
        return Return.success(m.charCodeAt(index))
    },
})
```
    
</details>