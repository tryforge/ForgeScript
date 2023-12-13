# $randomGuildChannelID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a random channel ID of a guild
## Usage
```
$randomGuildChannelID
```
---
```
$randomGuildChannelID[guild ID;...type]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to get channel from | Yes | No
type | Enum (`GuildText`, `DM`, `GuildVoice`, `GroupDM`, `GuildCategory`, `GuildNews`, `GuildNewsThread`, `GuildPublicThread`, `GuildPrivateThread`, `GuildStageVoice`, `GuildDirectory`, `GuildForum`, `GuildMedia`) | The channel types to get an id from | No | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomGuildChannelID.ts)
    
</summary>
    
```ts
import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomGuildChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channel from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "type",
            description: "The channel types to get an id from",
            type: ArgType.Enum,
            rest: true,
            required: false,
            enum: ChannelType
        }
    ],
    execute(ctx, [g, types]) {
        g ??= ctx.guild!
        return this.success(
            types.length === 0 ? g?.channels.cache.randomKey() :
                g?.channels.cache.filter(x => types.includes(x.type)).randomKey()
        )
    },
})

```
    
</details>