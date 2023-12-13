# $channelChildrenIDs
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the children ids this category has
## Usage
```
$channelChildrenIDs
```
---
```
$channelChildrenIDs[channel ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The category to get its children | Yes | No
separator | String | The separator to use for every channel | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelChildrenIDs.ts)
    
</summary>
    
```ts
import { BaseChannel, CategoryChannel, ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelChildrenIDs",
    version: "1.0.3",
    description: "Returns the children ids this category has",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its children",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory,
        },
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [channel, sep]) {
        return this.success(
            ((channel ?? ctx.channel) as CategoryChannel)?.children?.cache.map((x) => x.id).join(sep || ", ")
        )
    },
})

```
    
</details>