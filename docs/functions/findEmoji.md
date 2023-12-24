# $findEmoji
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds an emoji
## Usage
```
$findEmoji[query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
query | String | The id, mention or emoji name to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findEmoji.ts)
    
</summary>
    
```ts
import { parseEmoji } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$findEmoji",
    version: "1.0.0",
    description: "Finds an emoji",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or emoji name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [q]) {
        const parsed = parseEmoji(q)

        if (CompiledFunction.IdRegex.test(q)) {
            const e = ctx.client.emojis.cache.get(q)
            if (e) return this.success(e.id)
        }

        const name = parsed?.name.toLowerCase()

        return this.success(
            ctx.client.emojis.cache.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id
        )
    },
})

```
    
</details>