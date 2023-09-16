# $createChannel
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a channel in a guild, returns the channel id
## Usage
```
$createChannel[guild ID;channel name;channel type;topic;parent ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to create this channel on | Yes | No
channel name | String | The name for the channel | Yes | No
channel type | Enum (`GuildText`, `DM`, `GuildVoice`, `GroupDM`, `GuildCategory`, `GuildNews`, `GuildNewsThread`, `GuildPublicThread`, `GuildPrivateThread`, `GuildStageVoice`, `GuildDirectory`, `GuildForum`) | The type of the channel, some are not supported | Yes | No
topic | String | The topic for the channel | No | No
parent ID | String | The parent id for the channel | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/createChannel.ts)
    
</summary>
    
```ts
import { ChannelType, GuildChannelCreateOptions } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createChannel",
    version: "1.0.0",
    description: "Creates a channel in a guild, returns the channel id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create this channel on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "channel name",
            description: "The name for the channel",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "channel type",
            description: "The type of the channel, some are not supported",
            rest: false,
            type: ArgType.Enum,
            enum: ChannelType,
            required: true,
        },
        {
            name: "topic",
            description: "The topic for the channel",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "parent ID",
            description: "The parent id for the channel",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [guild, name, type, topic, parentId]) {
        const ch = await guild.channels
            .create({
                type: type as GuildChannelCreateOptions["type"],
                name,
                topic: topic || undefined,
                parent: parentId,
            })
            .catch(noop)
        return Return.success(ch ? ch.id : undefined)
    },
})

```
    
</details>