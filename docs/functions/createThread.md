# $createThread
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a thread, returns thread channel id on success
## Usage
```
$createThread[channel ID;name;content;message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to create the thread at | No | No
name | String | The name for the thread | Yes | No
content | String | The content to use for the starter message | No | No
message ID | Message | The message to start thread for | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/createThread.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createThread",
    version: "1.0.3",
    description: "Creates a thread, returns thread channel id on success",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the thread at",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "threads" in i,
        },
        {
            name: "name",
            description: "The name for the thread",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "content",
            description: "The content to use for the starter message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "message ID",
            description: "The message to start thread for",
            rest: false,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    async execute(ctx, [channel, name, content]) {
        const ch = channel as TextChannel

        ctx.container.content = content || undefined
        const success = await ch.threads
            .create({
                name,
                startMessage: ctx.container.getOptions(),
            })
            .catch(noop)

        ctx.container.reset()

        return Return.success(success ? success.id : undefined)
    },
})

```
    
</details>