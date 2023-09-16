# $startTyping
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Starts typing in a channel
## Usage
```
$startTyping[channel ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to start typing at | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/startTyping.ts)
    
</summary>
    
```ts
import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$startTyping",
    version: "1.0.0",
    description: "Starts typing in a channel",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to start typing at",
            required: true,
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
    ],
    async execute(ctx, [ch]) {
        const channel = ch ?? ctx.channel
        if (channel.isTextBased()) await channel.sendTyping().catch(() => null)
        return Return.success()
    },
})

```
    
</details>