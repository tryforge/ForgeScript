# $channelChildrenCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the amount of children this category has
## Usage
```
$channelChildrenCount
```
---
```
$channelChildrenCount[channel ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The category to get its child count | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelChildrenCount.ts)
    
</summary>
    
```ts
import { BaseChannel, CategoryChannel, ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelChildrenCount",
    version: "1.0.3",
    description: "Returns the amount of children this category has",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its child count",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory,
        },
    ],
    execute(ctx, [channel]) {
        return this.success(((channel ?? ctx.channel) as CategoryChannel)?.children?.cache.size)
    },
})

```
    
</details>