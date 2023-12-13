# $guildChannelCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the server channel count
## Usage
```
$guildChannelCount
```
---
```
$guildChannelCount[guild ID;...categories]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to get channels from | Yes | No
categories | Enum (`GuildText`, `DM`, `GuildVoice`, `GroupDM`, `GuildCategory`, `GuildNews`, `GuildNewsThread`, `GuildPublicThread`, `GuildPrivateThread`, `GuildStageVoice`, `GuildDirectory`, `GuildForum`, `GuildMedia`) | The categories to filter by | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildChannelCount.ts)
    
</summary>
    
```ts
import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildChannelCount",
    version: "1.0.0",
    description: "Returns the server channel count",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channels from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "categories",
            description: "The categories to filter by",
            rest: true,
            required: true,
            enum: ChannelType,
            type: ArgType.Enum,
        },
    ],
    execute(ctx, [guild, categories]) {
        guild ??= ctx.guild!
        return this.success(
            (this.hasFields ? guild.channels.cache.filter((x) => categories.includes(x.type)) : guild.channels.cache)
                .size
        )
    },
})

```
    
</details>