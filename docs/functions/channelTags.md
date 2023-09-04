# $channelTags
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves tags from a forum thread
## Usage
```
$channelTags
```
---
```
$channelTags[channel ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channeol to get tags of | No | No
separator | String | The separator to use for every tag | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelTags.ts)
    
</summary>
    
```ts
import { BaseChannel, ChannelType, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelTags",
    version: "1.0.3",
    description: "Retrieves tags from a forum thread",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channeol to get tags of",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread()
        },
        {
            name: "separator",
            description: "The separator to use for every tag",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: false,
    execute(ctx, [ ch, sep ]) {
        const channel = (ch ?? ctx.channel) as ThreadChannel | undefined
        return Return.success(
            channel?.appliedTags.join(sep || ", ")
        )
    },
})
```
    
</details>