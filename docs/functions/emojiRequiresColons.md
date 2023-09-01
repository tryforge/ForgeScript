# $emojiRequiresColons
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether the emoji requires colons
## Usage
```
$emojiRequiresColons
```
---
```
$emojiRequiresColons[emoji ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
emoji ID | GuildEmoji | The emoji id to return its colons state | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/emojiRequiresColons.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiRequiresColons",
    description: "Returns whether the emoji requires colons",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its colons state",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true
        }
    ],
    execute(ctx, [ emoji ]) {
        emoji ?? ctx.emoji
        return Return.success(
            emoji?.requiresColons
        )
    },
})
```
    
</details>