# $emojiRoles
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the role ids that can use this emote
## Usage
```
$emojiRoles
```
---
```
$emojiRoles[emoji ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
emoji ID | GuildEmoji | The emoji id to return its roles | Yes | No
separator | String | The separator to use for every role | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/emojiRoles.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiRoles",
    version: "1.0.0",
    description: "Returns the role ids that can use this emote",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its roles",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for every role",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ emoji, sep ]) {
        emoji ?? ctx.emoji
        return Return.success(
            emoji?.roles.cache.map(x => x.id).join(sep || ", ")
        )
    },
})
```
    
</details>