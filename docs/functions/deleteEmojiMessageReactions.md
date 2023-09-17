# $deleteEmojiMessageReactions
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes all emoji reactions from a message, returns amount of reaction emojis successfully deleted
## Usage
```
$deleteEmojiMessageReactions[channel ID;message ID;...emojis]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is located | Yes | No
message ID | Message | The message to remove emoji reactions from | Yes | No
emojis | Reaction | The emojis to delete from this message | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteEmojiMessageReactions.ts)
    
</summary>
    
```ts
import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteEmojiMessageReactions",
    version: "1.0.0",
    description: "Deletes all emoji reactions from a message, returns amount of reaction emojis successfully deleted",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove emoji reactions from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emojis",
            description: "The emojis to delete from this message",
            required: true,
            pointer: 1,
            rest: true,
            type: ArgType.Reaction,
        },
    ],
    async execute(_, [, , emojis]) {
        let count = 0

        for (const emoji of emojis) {
            const success = await emoji.remove().catch(noop)
            if (success) count++
        }

        return Return.success(count)
    },
})

```
    
</details>