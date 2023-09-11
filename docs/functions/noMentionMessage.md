# $noMentionMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves arguments from a message without mentions
## Usage
```
$noMentionMessage
```
---
```
$noMentionMessage[index;end index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | Index to get arg | Yes | No
end index | Number | The end index | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/noMentionMessage.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"
import { Return } from "../structures/Return"

const NoMentionRegex = /<(@|#)(&|!)?(\d{16,23})>/g

export default new NativeFunction({
    name: "$noMentionMessage",
    version: "1.0.0",
    description: "Retrieves arguments from a message without mentions",
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
        const msg = ctx.args.join(" ").replace(NoMentionRegex, "").trim().split(/ +/)

        if (this.hasFields) {
            return Return.success(end ? msg.slice(index, end) : msg[index ])
        }
        return Return.success(msg.join(" "))
    },
})
```
    
</details>