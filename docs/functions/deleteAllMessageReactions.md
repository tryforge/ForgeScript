# $deleteAllMessageReactions
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes all reactions from a message, returns bool
## Usage
```
$deleteAllMessageReactions
```
---
```
$deleteAllMessageReactions[channel ID;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is located | Yes | No
message ID | Message | The message to remove reactions from | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteAllMessageReactions.ts)
    
</summary>
    
```ts
import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteAllMessageReactions",
    version: "1.0.0",
    description: "Deletes all reactions from a message, returns bool",
    unwrap: true,
    brackets: false,
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
            description: "The message to remove reactions from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.reactions.removeAll().catch(noop)))
    },
})

```
    
</details>