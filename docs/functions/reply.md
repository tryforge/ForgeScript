# $reply
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Marks the response as a reply
## Usage
```
$reply
```
---
```
$reply[channel ID;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is at | Yes | No
message ID | Message | The message to reply to | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/reply.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reply",
    version: "1.0.0",
    description: "Marks the response as a reply",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is at",
            rest: false,
            required: true,
            type: ArgType.Channel
        },
        {
            name: "message ID",
            description: "The message to reply to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        }
    ],
    execute(ctx, [ channel, message ]) {
        ctx.container.reference = (message ?? ctx.message)?.id
        return Return.success()
    },
})
```
    
</details>