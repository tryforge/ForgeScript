# $randomGuildEmojiID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a random emoji ID of a guild
## Usage
```
$randomGuildEmojiID
```
---
```
$randomGuildEmojiID[guild ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to get emoji from | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomGuildEmojiID.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomGuildEmojiID",
    version: "1.0.3",
    description: "Returns a random emoji ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emoji from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    execute(ctx, [g]) {
        g ??= ctx.guild!

        return this.success(g?.emojis.cache.randomKey())
    },
})

```
    
</details>