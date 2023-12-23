# $isChannelMentioned
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether a channel was mentioned in this message
## Usage
```
$isChannelMentioned[channel ID;message ID;channel ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | Channel to pull the message from | Yes | No
message ID | Message | The message to get mentions from | Yes | No
channel ID | Channel | The entity to check for mentions | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isChannelMentioned.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$isChannelMentioned",
    version: "1.3.0",
    description: "Returns whether a channel was mentioned in this message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            description: "Channel to pull the message from",
            check: (i: BaseChannel) => i.isTextBased(),
            required: true,
            type: ArgType.Channel
        },
        {
            name: "message ID",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
            description: "The message to get mentions from"
        },
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            description: "The entity to check for mentions"
        }
    ],
    execute(ctx, [, message, ch ]) {
        return this.success(message.mentions.channels.has(ch.id))
    },
})
```
    
</details>