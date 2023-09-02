# $deleteStickers
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Delete given sticker ids, returns the count of stickers deleted
## Usage
```
$deleteStickers[guild ID;...stickers]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to delete stickers from | Yes | No
stickers | GuildSticker | The stickers to delete | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteStickers.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteStickers",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given sticker ids, returns the count of stickers deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete stickers from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "stickers",
            description: "The stickers to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.GuildSticker
        }
    ],
    async execute(ctx, [ guild, stickers ]) {
        let count = 0
        for (let i = 0, len = stickers.length;i < len;i++) {
            const sticker = stickers[i]
            const success = await sticker.delete().catch(noop)
            if (success) count++
        }

        return Return.success(count)
    },
})
```
    
</details>