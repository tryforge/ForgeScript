# $guildVanityUses
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the guilds vanity uses
## Usage
```
$guildVanityUses
```
---
```
$guildVanityUses[guild ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to return its vanity uses | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildVanityUses.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildVanityUses",
    version: "1.0.0",
    description: "Returns the guilds vanity uses",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to return its vanity uses",
            rest: false,
            type: ArgType.Guild,
            required: true
        }
    ],
    brackets: false,
    async execute(ctx, [ guild ]) {
        guild ??= ctx.guild!
        const vanity = await guild?.fetchVanityData().catch(noop)
        return Return.success(vanity ? vanity.uses : undefined)
    },
})
```
    
</details>