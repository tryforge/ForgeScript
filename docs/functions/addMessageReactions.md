# $addMessageReactions
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds reactions to a message, returns amount of emojis successfully reacted
## Usage
```
$addMessageReactions[channel ID;message ID;...emojis]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is located | Yes | No
message ID | Message | The message to add reactions to | Yes | No
emojis | String | The emojis to react with | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addMessageReactions.ts)
    
</summary>
    
```ts
import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$addMessageReactions",
    version: "1.0.0",
    description: "Adds reactions to a message, returns amount of emojis successfully reacted",
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
            description: "The message to add reactions to",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emojis",
            description: "The emojis to react with",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(_, [, message, emojis]) {
        let count = 0

        for (const emoji of emojis) {
            const success = await message.react(emoji).catch(noop)
            if (success) count++
        }

        return this.success(count)
    },
})

```
    
</details>