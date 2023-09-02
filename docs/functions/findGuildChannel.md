# $findGuildChannel
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a channel of a guild
## Usage
```
$findGuildChannel[guild ID;query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to find the channel on | Yes | No
query | String | The id, mention or channel name to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findGuildChannel.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export const ChannelMentionCharRegex = /[<>#]/g

export default new NativeFunction({
    name: "$findGuildChannel",
    version: "1.0.0",
    description: "Finds a channel of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the channel on",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, q ]) {
        const id = q.replace(ChannelMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const ch = guild.channels.cache.get(id)
            if (ch) return Return.success(ch.id)
        }

        q = q.toLowerCase()
        return Return.success(
            guild.channels.cache.find(
                x => x.id === id || x.name.toLowerCase() === q
            )?.id
        )
    },
})
```
    
</details>