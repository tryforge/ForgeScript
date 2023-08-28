# $guildPremiumTier
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the server boost tier
## Usage
```
$guildPremiumTier
```
---
```
$guildPremiumTier[guild ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to retrieve the data | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildPremiumTier.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildPremiumTier",
    description: "Returns the server boost tier",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild
        }
    ],
    unwrap: true,
    execute(ctx, [ guild ]) {
        return Return.success(
            (guild ?? ctx.guild)?.premiumTier
        )
    },
})
```
    
</details>