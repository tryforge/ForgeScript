# $getMessageReactionCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets the amount of users that have reacted to a specific emoji
## Usage
```
$getMessageReactionCount[channel ID;message ID;emoji]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is located | Yes | No
message ID | Message | The message to get emoji count from | Yes | No
emoji | Reaction | The emoji to get its user count | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getMessageReactionCount.ts)
    
</summary>
    
```ts
import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$getMessageReactionCount",
    description: "Gets the amount of users that have reacted to a specific emoji",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to get emoji count from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        },
        {
            name: "emoji",
            description: "The emoji to get its user count",
            required: true,
            pointer: 1,
            rest: false,
            type: ArgType.Reaction
        }
    ],
    execute(ctx, [ channel, message, reaction ]) {
        return Return.success(
            reaction.count
        )
    },
})
```
    
</details>