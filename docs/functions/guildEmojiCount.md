# $guildEmojiCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the emoji count of a guild
## Usage
```
$guildEmojiCount
```
---
```
$guildEmojiCount[guild ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to get emotes from | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildEmojiCount.ts)
    
</summary>
    
```ts
import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildEmojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emotes from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        }
    ],
    execute(ctx, [ guild ]) {
        guild ??= ctx.guild!
        return Return.success(
            guild.emojis.cache.size
        )
    },
})
```
    
</details>