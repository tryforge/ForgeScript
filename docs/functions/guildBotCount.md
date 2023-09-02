# $guildBotCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the bot count of a guild
## Usage
```
$guildBotCount
```
---
```
$guildBotCount[guild ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to retrieve bot count from | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildBotCount.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildBotCount",
    version: "1.0.0",
    description: "Returns the bot count of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve bot count from",
            rest: false,
            required: true,
            type: ArgType.Guild
        }
    ],
    unwrap: true,
    execute(ctx, [ guild ]) {
        guild ??= ctx.guild!
        return Return.success(
            guild?.members.cache.filter(x => x.user.bot).size
        )
    }
})
```
    
</details>