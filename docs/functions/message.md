# $message
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves arguments from a message command
## Usage
```
$message
```
---
```
$message[index;end index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | Index to get arg | Yes | No
end index | Number | The end index | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/message.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$message",
    version: "1.0.0",
    description: "Retrieves arguments from a message command",
    args: [
        {
            name: "index",
            description: "Index to get arg",
            type: ArgType.Number,
            required: true,
            rest: false,
        },
        {
            name: "end index",
            description: "The end index",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [ index, end ]) {
        if (this.hasFields) {
            return Return.success(end ? ctx.args.slice(index, end) : ctx.args[index])
        }
        return Return.success(ctx.args.join(" "))
    },
})
```
    
</details>