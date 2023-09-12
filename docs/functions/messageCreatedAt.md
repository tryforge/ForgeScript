# $messageCreatedAt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the timestamp of the message
## Usage
```
$messageCreatedAt
```
---
```
$messageCreatedAt[channel ID;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to get the message from | Yes | No
message ID | Message | The message to get its timestamp | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/messageCreatedAt.ts)
    
</summary>
    
```ts
import { BaseChannel, MessageType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageCreatedAt",
    version: "1.0.2",
    description: "Returns the timestamp of the message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to get its timestamp",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [, message ]) {
        return Return.success(MessageType[(message ?? ctx.message)?.createdTimestamp!])
    },
})
```
    
</details>