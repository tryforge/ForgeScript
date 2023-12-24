# $messageAttachments
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves all attachments of this message
## Usage
```
$messageAttachments
```
---
```
$messageAttachments[channel ID;message ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to pull message from | Yes | No
message ID | Message | The message to get its attachments | Yes | No
separator | String | The separator to use for every attachment | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/messageAttachments.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageAttachments",
    version: "1.4.0",
    description: "Retrieves all attachments of this message",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its attachments",
            rest: false,
            required: true,
            type: ArgType.Message,
        },
        {
            name: "separator",
            rest: false,
            description: "The separator to use for every attachment",
            type: ArgType.String,
        }
    ],
    execute(ctx, [, message, sep]) {
        return this.success((message ?? ctx.message)?.attachments.map(x => x.url).join(sep ?? ", "))
    },
})

```
    
</details>