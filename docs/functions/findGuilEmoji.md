# $findGuilEmoji
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a emoji of a guild
## Usage
```
$findGuilEmoji[guild ID;query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to find the emoji on | Yes | No
query | String | The id, mention or emoji name to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findGuilEmoji.ts)
    
</summary>
    
```ts
import { parseEmoji } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$findGuilEmoji",
    version: "1.0.0",
    description: "Finds a emoji of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the emoji on",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "query",
            description: "The id, mention or emoji name to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, q ]) {
        const parsed = parseEmoji(q)

        if (CompiledFunction.IdRegex.test(q)) {
            const e = guild.emojis.cache.get(q)
            if (e) return Return.success(e.id)
        }

        const name = parsed?.name.toLowerCase()

        return Return.success(
            guild.channels.cache.find(
                x => x.id === q || x.name.toLowerCase() === q.toLowerCase() || x.toString() === q
            )?.id
        )
    },
})
```
    
</details>