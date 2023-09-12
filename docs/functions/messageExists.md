# $messageExists
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether given message id exists
## Usage
```
$messageExists[channel ID;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to get the message from | Yes | No
message ID | String | The message to check for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/messageExists.ts)
    
</summary>
    
```ts
import { BaseChannel, MessageType, TextChannel } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$messageExists",
    version: "1.0.5",
    description: "Returns whether given message id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to check for",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [ ch, id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            !!(await (ch as TextChannel).messages.fetch(id).catch(noop))
        )
    },
})
```
    
</details>