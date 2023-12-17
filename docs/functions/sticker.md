# $sticker
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Attach a sticker to the response
## Usage
```
$sticker[guild ID;sticker ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to get sticker from | Yes | No
sticker ID | GuildSticker | The sticker to use | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/sticker.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sticker",
    version: "1.3.0",
    description: "Attach a sticker to the response",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get sticker from"
        },
        {
            name: "sticker ID",
            rest: false,
            required: true,
            type: ArgType.GuildSticker,
            pointer: 0,
            description: "The sticker to use"
        }
    ],
    execute(ctx, [, sticker]) {
        ctx.container.stickers.push(sticker.id)
        return this.success()
    },
})

```
    
</details>