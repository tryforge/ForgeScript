# $emojiNames
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the emote names of a guild
## Usage
```
$emojiNames
```
---
```
$emojiNames[guild ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to return the emotes of | Yes | No
separator | String | The separator to use for each emoji | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/emojiNames.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiNames",
    description: "Returns the emote names of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the emotes of",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for each emoji",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, sep ]) {
        return Return.success(
            (guild ?? ctx.guild)?.emojis.cache.map(x => x.toString()).join(sep || ", ")
        )
    },
})
```
    
</details>