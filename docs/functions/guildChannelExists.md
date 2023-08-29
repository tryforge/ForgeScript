# $guildChannelExists
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether an guild channel id exists
## Usage
```
$guildChannelExists[guild ID;channel ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to check for the guild channel | Yes | No
channel ID | String | The role to guild channel | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildChannelExists.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildChannelExists",
    description: "Returns whether an guild channel id exists",
    unwrap: true,
    brackets: true,
    args: [ 
        {
            name: "guild ID",
            description: "The guild to check for the guild channel",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "channel ID",
            description: "The role to guild channel",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            guild.channels.cache.has(id)
        )
    },
})
```
    
</details>