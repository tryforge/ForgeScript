# $sendMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sends a message to a channel
## Usage
```
$sendMessage[channel ID;content;return message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to send this message to | Yes | No
content | String | The content for the message | No | No
return message ID | Boolean | Whether to return the message id of the newly sent message | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/sendMessage.ts)
    
</summary>
    
```ts
import { BaseChannel, Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sendMessage",
    version: "1.0.0",
    description: "Sends a message to a channel",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to send this message to",
            required: true,
            type: ArgType.Channel,
            rest: false,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "content",
            description: "The content for the message",
            type: ArgType.String,
            rest: false
        },
        {
            name: "return message ID",
            description: "Whether to return the message id of the newly sent message",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    brackets: true,
    async execute(ctx, [ channel, content, returnMessageID ]) {
        ctx.container.content = content ?? undefined
        const msg = await ctx.container.send<Message<true>>(channel)
        return Return.success(returnMessageID ? msg?.id : undefined)
    },
})
```
    
</details>