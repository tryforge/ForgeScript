# $channelCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the channel count of all servers
## Usage
```
$channelCount
```
---
```
$channelCount[...categories]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
categories | Enum (`GuildText`, `DM`, `GuildVoice`, `GroupDM`, `GuildCategory`, `GuildNews`, `GuildNewsThread`, `GuildPublicThread`, `GuildPrivateThread`, `GuildStageVoice`, `GuildDirectory`, `GuildForum`, `GuildMedia`) | The categories to filter by | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelCount.ts)
    
</summary>
    
```ts
import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelCount",
    version: "1.0.0",
    description: "Returns the channel count of all servers",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "categories",
            description: "The categories to filter by",
            rest: true,
            required: true,
            enum: ChannelType,
            type: ArgType.Enum,
        },
    ],
    execute(ctx, [categories]) {
        return this.success(
            (this.hasFields
                ? ctx.client.channels.cache.filter((x) => categories.includes(x.type))
                : ctx.client.channels.cache
            ).size
        )
    },
})

```
    
</details>