# $stickers
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieve a sticker url from a message with given index
## Usage
```
$stickers
```
---
```
$stickers[channel ID;message ID;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to pull message from | Yes | No
message ID | Message | The message to get its stickers | Yes | No
index | Number | The index to get this sticker | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/stickers.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$stickers",
    version: "1.0.3",
    description: "Retrieve a sticker url from a message with given index",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its stickers",
            rest: false,
            required: true,
            type: ArgType.Message
        },
        {
            name: "index",
            rest: false,
            description: "The index to get this sticker",
            type: ArgType.Number
        }
    ],
    execute(ctx, [, message, index ]) {
        index ??= 1
        return Return.success(
            (message ?? ctx.message)?.stickers.at(index )?.url
        )
    },
})
```
    
</details>