# $hasEmbeds
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether given message has embeds
## Usage
```
$hasEmbeds
```
---
```
$hasEmbeds[channel ID;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to get message from | Yes | No
message ID | Message | The message to check for embeds | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/hasEmbeds.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$hasEmbeds",
    version: "1.2.0",
    brackets: false,
    description: "Checks whether given message has embeds",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get message from",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "message ID",
            pointer: 0,
            rest: false,
            required: true,
            type: ArgType.Message,
            description: "The message to check for embeds"
        }
    ],
    execute(ctx, [, msg]) {
        return Return.success(
            !!(msg ?? ctx.message)?.embeds.length
        )
    },
})
```
    
</details>