# $trimEnd
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Trims at the end of a string
## Usage
```
$trimEnd[message]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
message | String | The string to trim at the end | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/trimEnd.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$trimEnd",
    version: "1.0.6",
    description: "Trims at the end of a string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to trim at the end",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ m ]) {
        return Return.success(m.trimEnd())
    },
})
```
    
</details>