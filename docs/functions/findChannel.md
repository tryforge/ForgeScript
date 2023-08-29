# $findChannel
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a channel
## Usage
```
$findChannel[query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
query | String | The id, mention or channel name to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findChannel.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"
import { ChannelMentionCharRegex } from "./findGuildChannel"

export default new NativeFunction({
    name: "$findChannel",
    description: "Finds a channel",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ q ]) {
        const id = q.replace(ChannelMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const ch = ctx.client.channels.cache.get(id)
            if (ch) return Return.success(ch.id)
        }

        q = q.toLowerCase()

        return Return.success(
            ctx.client.channels.cache.find(
                x => x.id === id || ("name" in x && (x.name as string).toLowerCase() === q)
            )?.id
        )
    },
})
```
    
</details>