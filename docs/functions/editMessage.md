# $editMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits a message in a channel
## Usage
```
$editMessage[channel ID;message ID;content]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to edit this message | Yes | No
message ID | Message | The message to edit | Yes | No
content | String | The content for the message | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/editMessage.ts)
    
</summary>
    
```ts
import { BaseChannel, Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editMessage",
    version: "1.0.0",
    description: "Edits a message in a channel",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit this message",
            required: true,
            type: ArgType.Channel,
            rest: false,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to edit",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "content",
            description: "The content for the message",
            type: ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx, [, opt, content]) {
        ctx.container.content = content || undefined
        ctx.container.edit = true
        const msg = await ctx.container.send<Message<true>>(opt)
        return Return.success(!!msg)
    },
})

```
    
</details>