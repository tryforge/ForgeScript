# $argCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Counts number of args in message
## Usage
```
$argCount
```
---
```
$argCount[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | Text to count arguments | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/argCount.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$argCount",
    version: "1.0.0",
    brackets: false,
    description: "Counts number of args in message",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "Text to count arguments",
            required: true,
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        if (this.hasFields) return Return.success(text.trim().split(/ +/).length)
        return Return.success(ctx.args.length)
    },
})
```
    
</details>