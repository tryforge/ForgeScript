# $isRoleMentioned
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether a role was mentioned in this message
## Usage
```
$isRoleMentioned[channel ID;message ID;role ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | Channel to pull the message from | Yes | No
message ID | Message | The message to get mentions from | Yes | No
role ID | String | The entity to check for mentions | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isRoleMentioned.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$isRoleMentioned",
    version: "1.3.0",
    description: "Returns whether a role was mentioned in this message",
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
            name: "role ID",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The entity to check for mentions"
        }
    ],
    execute(ctx, [, message, r ]) {
        return this.success(message.mentions.roles.has(r))
    },
})
```
    
</details>