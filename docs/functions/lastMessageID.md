# $lastMessageID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the latest message sent in a channel
## Usage
```
$lastMessageID
```
---
```
$lastMessageID[channel ID;user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to pull last message from | Yes | No
user ID | User | The user id to get its last message sent | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/lastMessageID.ts)
    
</summary>
    
```ts
import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import { noop } from "lodash"

export default new NativeFunction({
    name: "$lastMessageID",
    version: "1.2.0",
    brackets: false,
    unwrap: true,
    description: "Returns the latest message sent in a channel",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull last message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "user ID",
            description: "The user id to get its last message sent",
            rest: false,
            required: false,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ ch, user ]) {
        ch ??= ctx.channel!
        if (user) {
            const messages = await (ch as TextBasedChannel).messages.fetch({ limit: 100 }).catch(noop)
            return Return.success(messages ? messages.find(x => x.author.id === user.id) : undefined)
        }
        return Return.success((ch as TextBasedChannel).lastMessageId)
    },
})
```
    
</details>